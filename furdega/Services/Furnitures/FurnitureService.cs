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

        public async Task<IEnumerable<FurnitureResponse>> GetFiltered(int? furnitureTypeId, int? materialTypeId)
        {

            var furniture = await _furnitureRepository
                .GetItems(s => (furnitureTypeId == null || s.FurnitureTypeId == furnitureTypeId) && 
                               (materialTypeId == null || s.MaterialTypeId == materialTypeId));

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

            furniture.AfterImageUrl = (await _imageManager.LoadImage(furnitureRequest.AfterImage))?.ImageUrl;
            furniture.BeforeImageUrl = (await _imageManager.LoadImage(furnitureRequest.BeforeImage))?.ImageUrl;

            var createdEmployee = await _furnitureRepository.Create(furniture);

            return createdEmployee.Id;
        }

        public async Task Update(int id, FurnitureRequest furnitureRequest)
        {
            var furniture = await _furnitureRepository.GetById(id);

            _mapper.Map(furnitureRequest, furniture);
            furniture.Id = id;

            await _imageManager.LoadImage(furnitureRequest.AfterImage);
            await _imageManager.LoadImage(furnitureRequest.BeforeImage);

            await _furnitureRepository.Update(furniture);
        }

        public async Task Delete(int id)
        {
            var furniture = await _furnitureRepository.GetById(id);

            await _furnitureRepository.Delete(furniture);
        }
    }
}