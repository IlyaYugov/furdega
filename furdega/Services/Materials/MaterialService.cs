using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.Materials.Dtos.Input;
using Furdega.Services.Materials.Dtos.Output;

namespace Furdega.Services.Materials
{
    public class MaterialService: IMaterialService
    {
        private readonly IRepositoryBase<Material> _materialRepository;
        private readonly IMapper _mapper;

        public MaterialService(IRepositoryBase<Material> materialRepository, IMapper mapper)
        {
            _materialRepository = materialRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MaterialResponse>> GetFiltered(int? materialTypeId)
        {

            var material = await _materialRepository
                .GetItems(s => materialTypeId == null || s.MaterialTypeId == materialTypeId);

            var response = _mapper.Map<List<MaterialResponse>>(material);

            return response;
        }

        public async Task<MaterialResponse> Get(int id)
        {
            var material = await _materialRepository.GetById(id);

            var response = _mapper.Map<MaterialResponse>(material);

            return response;
        }

        public async Task<int> Create(MaterialRequest materialRequest)
        {
            var material = _mapper.Map<Material>(materialRequest);

            var createdMaterial = await _materialRepository.Create(material);

            return createdMaterial.Id;
        }

        public async Task Update(int id, MaterialRequest materialRequest)
        {
            var material = await _materialRepository.GetById(id);

            _mapper.Map(materialRequest, material);

            await _materialRepository.Update(material);
        }

        public async Task Delete(int id)
        {
            var material = await _materialRepository.GetById(id);

            await _materialRepository.Delete(material);
        }
    }
}