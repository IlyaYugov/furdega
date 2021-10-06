using System.Collections.Generic;
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
        private readonly IMapper _mapper;

        public MaterialBrandService(IRepositoryBase<MaterialBrand> materialBrandRepository, IMapper mapper)
        {
            _materialBrandRepository = materialBrandRepository;
            _mapper = mapper;
        }

        public async Task<MaterialBrandResponse> Get(int id)
        {
            var brand = await _materialBrandRepository.GetById(id);

            return ConvertBrandToBrandResponse(brand);
        }

        public async Task<IEnumerable<MaterialBrandResponse>> GetBrands(int materialId)
        {
            var brands = await _materialBrandRepository.GetItems(m => m.MaterialId == materialId);

            return ConvertBrandsToBrandResponses(brands);
        }

        public async Task<int> Create(MaterialBrandRequest brandRequest)
        {
            var brand = _mapper.Map<MaterialBrand>(brandRequest);

            var createdType = await _materialBrandRepository.Create(brand);

            return createdType.Id;
        }

        public async Task Update(int id, MaterialBrandRequest brandRequest)
        {
            var brand = await _materialBrandRepository.GetById(id);

            _mapper.Map(brandRequest, brand);
            brand.Id = id;



            await _materialBrandRepository.Update(brand);
        }

        public async Task Delete(int id)
        {
            var type = await _materialBrandRepository.GetById(id);

            await _materialBrandRepository.Delete(type);
        }

        private ImageResponse[] DeserializeImages(string images) => JsonSerializer.Deserialize<ImageResponse[]>(images ?? "{}");

        private IEnumerable<MaterialBrandResponse> ConvertBrandsToBrandResponses(List<MaterialBrand> brands)
        {
            var brandResponses = new List<MaterialBrandResponse>();

            foreach (var brand in brands)
            {

                brandResponses.Add(ConvertBrandToBrandResponse(brand));
            }

            return brandResponses;
        }

        private MaterialBrandResponse ConvertBrandToBrandResponse(MaterialBrand brand)
        {
            var brandResponse = _mapper.Map<MaterialBrandResponse>(brand);

            brandResponse.Images = DeserializeImages(brand.Images);

            return brandResponse;
        }
    }
}
