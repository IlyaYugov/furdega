using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Dtos.MaterialTypes.Input;
using Furdega.Dtos.MaterialTypes.Output;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.Services.MaterialTypes
{
    public class MaterialTypeService: IMaterialTypeService
    {
        private readonly IRepositoryBase<MaterialType> _materialTypeRepository;
        private readonly IMapper _mapper;

        public MaterialTypeService(IRepositoryBase<MaterialType> materialTypeRepository, IMapper mapper)
        {
            _materialTypeRepository = materialTypeRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MaterialTypeResponse>> GetTypes()
        {
            var types = await _materialTypeRepository.GetItems();

            var response = _mapper.Map<List<MaterialTypeResponse>>(types);

            return response;
        }

        public async Task<int> Create(UpdateMaterialTypeRequest type)
        {
            var materialType = _mapper.Map<MaterialType>(type);

            var createdType = await _materialTypeRepository.Create(materialType);

            return createdType.Id;
        }

        public async Task Update(int id, UpdateMaterialTypeRequest type)
        {
            var materialType = _mapper.Map<MaterialType>(type);
            materialType.Id = id;

            await _materialTypeRepository.Update(materialType);
        }

        public async Task Delete(int id)
        {
            var type = await _materialTypeRepository.GetById(id);

            await _materialTypeRepository.Delete(type);
        }
    }
}
