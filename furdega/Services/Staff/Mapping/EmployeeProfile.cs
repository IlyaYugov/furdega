using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.FileManagers;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.Staff.Mapping
{
    public class EmployeeProfile: Profile
    {
        public EmployeeProfile()
        {
            CreateMap<EmployeeRequest, Employee>()
                .ForMember(dest => dest.ImageId, s => s.MapFrom(source => source.Image.Id));
            CreateMap<Employee, EmployeeResponse>()
                .ForMember(dest => dest.Image, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.ImageId,
                    ImageUrl = source.ImageUrl
                }));
        }
    }
}