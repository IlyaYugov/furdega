using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.Furnitures.Dtos.Input;
using Furdega.Services.Furnitures.Dtos.Output;

namespace Furdega.Services.Furnitures
{
    public class FurnitureService: IFurnitureService
    {
        private readonly IRepositoryBase<Furniture> _furnitureRepository;
        private readonly IMapper _mapper;
        private readonly IImageManager _imageManager;

        public FurnitureService(IRepositoryBase<Furniture> furnitureRepository, IMapper mapper, IImageManager imageManager)
        {
            _furnitureRepository = furnitureRepository;
            _mapper = mapper;
            _imageManager = imageManager;
        }

        public async Task<IEnumerable<FurnitureResponse>> GetFiltered(int? furnitureTypeId)
        {

            var furniture = await _furnitureRepository
                .GetItems(s => furnitureTypeId == null || s.FurnitureTypeId == furnitureTypeId);

            var response = _mapper.Map<List<FurnitureResponse>>(furniture);

            return response;
        }

        public async Task<FurnitureResponse> Get(int id)
        {
            var furniture = await _furnitureRepository.GetById(id);

            var response = _mapper.Map<FurnitureResponse>(furniture);

            return response;
        }

        public async Task<int> Create(FurnitureRequest furnitureRequest)
        {
            var furniture = _mapper.Map<Furniture>(furnitureRequest);

            var newAfterImage = await _imageManager.CreateImage(furnitureRequest.AfterImage);
            furniture.AfterImageUrl = newAfterImage?.ImageUrl;

            var newBeforeImage = await _imageManager.CreateImage(furnitureRequest.BeforeImage);
            furniture.BeforeImageUrl = newBeforeImage?.ImageUrl;

            var createdEmployee = await _furnitureRepository.Create(furniture);

            return createdEmployee.Id;
        }

        public async Task Update(int id, FurnitureRequest furnitureRequest)
        {
            var furniture = await _furnitureRepository.GetById(id);

            _mapper.Map(furnitureRequest, furniture);
            furniture.Id = id;

            if (!string.IsNullOrEmpty(furnitureRequest?.AfterImage?.Base64ImageString))
            {
                var newImage = await _imageManager.UpdateImage(furnitureRequest.AfterImage, furniture.AfterImageUrl);
                furniture.AfterImageUrl = newImage?.ImageUrl;
            }

            if (!string.IsNullOrEmpty(furnitureRequest?.BeforeImage?.Base64ImageString))
            {
                var newImage = await _imageManager.UpdateImage(furnitureRequest.BeforeImage, furniture.BeforeImageUrl);
                furniture.BeforeImageUrl = newImage?.ImageUrl;
            }

            await _furnitureRepository.Update(furniture);
        }

        public async Task Delete(int id)
        {
            var furniture = await _furnitureRepository.GetById(id);

            await _furnitureRepository.Delete(furniture);
        }
    }
}