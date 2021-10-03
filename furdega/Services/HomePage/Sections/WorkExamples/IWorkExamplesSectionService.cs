using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.WorkExamples
{
    public interface IWorkExamplesSectionService : IHomePageSectionService<WorkExamplesSectionRequest, WorkExamplesSectionResponse>
    {
    }
}