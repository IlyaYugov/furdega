using System.IO;
using Furdega.Configuration;
using Furdega.DataAccess;
using Furdega.Repositories;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.Accounts;
using Furdega.Services.FileManagers;
using Furdega.Services.Furnitures;
using Furdega.Services.FurnitureTypes;
using Furdega.Services.FurnitureTypes.Mapping;
using Furdega.Services.HomePage;
using Furdega.Services.HomePage.Sections.About;
using Furdega.Services.HomePage.Sections.CompanyBenefits;
using Furdega.Services.HomePage.Sections.IssueSolutions;
using Furdega.Services.HomePage.Sections.MainHome;
using Furdega.Services.HomePage.Sections.Staff;
using Furdega.Services.HomePage.Sections.WorkExamples;
using Furdega.Services.HomePage.Sections.WorkingProcess;
using Furdega.Services.Materials;
using Furdega.Services.MaterialTypes;
using Furdega.Services.Staff;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Furdega
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Frontend/build";
            });

            services.AddAutoMapper(typeof(FurnitureTypeProfile));

            ConfigureProjectSettings(services);
            ConfigureDatabase(services);
            ConfigureDependences(services);
            ConfigureAuth(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            ConfigureImageStore(app);

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Frontend";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
                }
            });
        }

        private void ConfigureDependences(IServiceCollection services)
        {
            services.AddScoped(typeof(IRepositoryBase<>), typeof(FurdegaRepository<>));

            services.AddScoped<IFurnitureTypeService, FurnitureTypeService>();
            services.AddScoped<IMaterialTypeService, MaterialTypeService>();
            services.AddScoped<IHomePageService, HomePageService>();
            services.AddScoped<IImageManager, ImageManager>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IFurnitureService, FurnitureService>();
            services.AddScoped<IMaterialService, MaterialService>();
            services.AddScoped<IAccountService, AccountService>();

            services.AddScoped<IHomePageService, HomePageService>();
            services.AddScoped<IAboutSectionService, AboutSectionService>(); 
            services.AddScoped<ICompanyBenefitsSectionService, CompanyBenefitsSectionService>();
            services.AddScoped<IIssueSolutionsSectionService, IssueSolutionsSectionService>();
            services.AddScoped<IMainHomeSectionService, MainHomeSectionService>(); 
            services.AddScoped<IStaffSectionService, StaffSectionService>(); 
            services.AddScoped<IWorkExamplesSectionService, WorkExamplesSectionService>();
            services.AddScoped<IWorkingProcessSectionService, WorkingProcessSectionService>();
        }

        private void ConfigureImageStore(IApplicationBuilder app)
        {
            var projectSettings = _configuration.GetSection(nameof(ProjectSettings)).Get<ProjectSettings>();

            Directory.CreateDirectory(projectSettings.GetImageDirectoryPath);

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(projectSettings.GetImageDirectoryPath),
                RequestPath = $"/{projectSettings.ImagesDirectoryName}"
            });

            app.UseSpaStaticFiles();
        }

        private void ConfigureAuth(IServiceCollection services)
        {
            var authOptions = _configuration.GetSection(nameof(AuthOptions)).Get<AuthOptions>();

            services.AddAuthorization(options =>
            {
                options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build();
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = authOptions.Issuer,
                        ValidateAudience = true,
                        ValidAudience = authOptions.Audience,
                        ValidateLifetime = true,
                        IssuerSigningKey = authOptions.GetSymmetricSecurityKey(),
                        ValidateIssuerSigningKey = true,
                    };
                });
        }

        private void ConfigureDatabase(IServiceCollection services)
        {
            services.AddDbContext<FurdegaDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }

        private void ConfigureProjectSettings(IServiceCollection services)
        {
            services.Configure<ProjectSettings>(options => _configuration.GetSection(nameof(ProjectSettings)).Bind(options));
            services.Configure<AuthOptions>(options => _configuration.GetSection(nameof(AuthOptions)).Bind(options));
        }
    }
}
