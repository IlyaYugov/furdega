using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.MaterialBrands.Dtos.Input;
using Furdega.Services.MaterialBrands.Dtos.Output;

namespace Furdega.Services.MaterialBrands
{
    public class MaterialBrandService: IMaterialBrandService
    {
        private readonly IRepositoryBase<MaterialBrand> _materialBrandRepository;
        private readonly IImageManager _imageManager;

        private readonly IMapper _mapper;

        public MaterialBrandService(IRepositoryBase<MaterialBrand> materialBrandRepository, IMapper mapper, IImageManager imageManager)
        {
            _materialBrandRepository = materialBrandRepository;
            _mapper = mapper;
            _imageManager = imageManager;
        }

        public async Task<MaterialBrandResponse> Get(int id)
        {
            var brand = await _materialBrandRepository.GetById(id);

            return ConvertBrandToBrandResponse(brand);
        }

        public async Task<IEnumerable<GetMaterialBrandsResponse>> GetBrands(int materialId)
        {
            var brands = await _materialBrandRepository.GetItems(m => m.MaterialId == materialId);

            var brandsResponse = _mapper.Map<List<GetMaterialBrandsResponse>>(brands);

            return brandsResponse;
        }

        public async Task<int> Create(MaterialBrandRequest brandRequest)
        {
            var brand = _mapper.Map<MaterialBrand>(brandRequest);

            var mainImage = await _imageManager.CreateImage(brandRequest.MainImage);
            brand.MainImageUrl = mainImage.ImageUrl;

            var previewImage = await _imageManager.CreateImage(brandRequest.PreviewImage);
            brand.PreviewImageUrl = previewImage.ImageUrl;

            var imageResponses = new List<ImageResponse>();
            foreach (var image in brandRequest.Images)
            {
                var imageResponse = await _imageManager.CreateImage(image);
                imageResponses.Add(imageResponse);
            }
            brand.Images = SerializeImages(imageResponses);

            var createdType = await _materialBrandRepository.Create(brand);

            return createdType.Id;
        }

        public async Task Update(int id, MaterialBrandRequest brandRequest)
        {
            var brandFromDb = await _materialBrandRepository.GetById(id);

            _mapper.Map(brandRequest, brandFromDb);
            brandFromDb.Id = id;

            if (!string.IsNullOrEmpty(brandRequest.MainImage?.Base64ImageString))
            {
                var mainImage = await _imageManager.CreateImage(brandRequest.MainImage);
                brandFromDb.MainImageUrl = mainImage.ImageUrl;
            }

            if (!string.IsNullOrEmpty(brandRequest.PreviewImage?.Base64ImageString))
            {
                var previewImage = await _imageManager.CreateImage(brandRequest.PreviewImage);
                brandFromDb.PreviewImageUrl = previewImage.ImageUrl;
            }

            var actualImages = GetActualImagesByRequestModel(brandFromDb, brandRequest);
            foreach (var requestedImage in brandRequest.Images)
            {
                if(string.IsNullOrEmpty(requestedImage.Base64ImageString))
                    continue;

                var imageResponse = await _imageManager.CreateImage(requestedImage);

                var image = actualImages.FirstOrDefault(s => s.Id == imageResponse.Id);

                if (image == null)
                {
                    actualImages.Add(imageResponse);
                }
                else
                {
                    image.ImageUrl = imageResponse.ImageUrl;
                }
            }
            brandFromDb.Images = SerializeImages(actualImages);

            await _materialBrandRepository.Update(brandFromDb);
        }

        public async Task Delete(int id)
        {
            var type = await _materialBrandRepository.GetById(id);

            await _materialBrandRepository.Delete(type);
        }

        private ImageResponse[] DeserializeImages(string images) => JsonSerializer.Deserialize<ImageResponse[]>(images ?? "[]");
        private string SerializeImages(List<ImageResponse> images) => JsonSerializer.Serialize(images);

        private MaterialBrandResponse ConvertBrandToBrandResponse(MaterialBrand brand)
        {
            if (brand == null)
                return null;

            var brandResponse = _mapper.Map<MaterialBrandResponse>(brand);

            brandResponse.Images = DeserializeImages(brand.Images);

            return brandResponse;
        }

        private List<ImageResponse> GetActualImagesByRequestModel(MaterialBrand brandFromDb, MaterialBrandRequest brandRequest)
        {
            var existingImagesIds = brandRequest.Images.Select(s => s.Id);
            var actualImages = DeserializeImages(brandFromDb?.Images)
                .Where(s => existingImagesIds.Contains(s.Id))
                .ToList();

            return actualImages;
        }
    }
}
