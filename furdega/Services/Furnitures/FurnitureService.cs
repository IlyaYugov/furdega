using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.Furnitures.Dtos.Input;
using Furdega.Services.Furnitures.Dtos.Output;
using Furdega.Services.Staff.Dtos.Input;

namespace Furdega.Services.Furnitures
{
    public class FurnitureService: IFurnitureService
    {
        private readonly IRepositoryBase<Furniture> _furnitureRepository;
        private readonly IMapper _mapper;

        public FurnitureService(IRepositoryBase<Furniture> furnitureRepository, IMapper mapper)
        {
            _furnitureRepository = furnitureRepository;
            _mapper = mapper;
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

            var createdEmployee = await _furnitureRepository.Create(furniture);

            return createdEmployee.Id;
        }

        public async Task Update(int id, FurnitureRequest furnitureRequest)
        {
            var furniture = await _furnitureRepository.GetById(id);

            _mapper.Map(furnitureRequest, furniture);

            await _furnitureRepository.Update(furniture);
        }

        public async Task Delete(int id)
        {
            var furniture = await _furnitureRepository.GetById(id);

            await _furnitureRepository.Delete(furniture);
        }
    }
}