﻿// <auto-generated />
using System;
using Furdega.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Furdega.Migrations
{
    [DbContext(typeof(FurdegaDbContext))]
    partial class FurdegaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Furdega.DataAccess.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Furniture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("AfterImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AfterImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("BeforeImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("BeforeImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FurnitureTypeId")
                        .HasColumnType("int");

                    b.Property<int>("MaterialTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FurnitureTypeId");

                    b.ToTable("Furniture");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.FurnitureType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("FurnitureTypes");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.HomePageSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("SectionContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SectionTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("HomePageSections");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Material", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("MainImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("MainImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PreviewImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("PreviewImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Materials");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.MaterialBrand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Images")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("MainImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("MainImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaterialId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MaterialId");

                    b.ToTable("MaterialBrands");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Login = "admin",
                            Password = "QwErTy!@#$%^&*(QaZwSx"
                        });
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Furniture", b =>
                {
                    b.HasOne("Furdega.DataAccess.Models.FurnitureType", null)
                        .WithMany("Furniture")
                        .HasForeignKey("FurnitureTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.MaterialBrand", b =>
                {
                    b.HasOne("Furdega.DataAccess.Models.Material", null)
                        .WithMany("MaterialBrands")
                        .HasForeignKey("MaterialId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.FurnitureType", b =>
                {
                    b.Navigation("Furniture");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Material", b =>
                {
                    b.Navigation("MaterialBrands");
                });
#pragma warning restore 612, 618
        }
    }
}
