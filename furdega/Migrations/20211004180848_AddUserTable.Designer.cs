﻿// <auto-generated />
using System;
using Furdega.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Furdega.Migrations
{
    [DbContext(typeof(FurdegaDbContext))]
    [Migration("20211004180848_AddUserTable")]
    partial class AddUserTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.HasIndex("MaterialTypeId");

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

                    b.Property<Guid>("ImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaterialTypeId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MaterialTypeId");

                    b.ToTable("Materials");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.MaterialType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MaterialTypes");
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
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Furniture", b =>
                {
                    b.HasOne("Furdega.DataAccess.Models.FurnitureType", null)
                        .WithMany("Furniture")
                        .HasForeignKey("FurnitureTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Furdega.DataAccess.Models.MaterialType", null)
                        .WithMany("Furniture")
                        .HasForeignKey("MaterialTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.Material", b =>
                {
                    b.HasOne("Furdega.DataAccess.Models.MaterialType", null)
                        .WithMany("Materials")
                        .HasForeignKey("MaterialTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.FurnitureType", b =>
                {
                    b.Navigation("Furniture");
                });

            modelBuilder.Entity("Furdega.DataAccess.Models.MaterialType", b =>
                {
                    b.Navigation("Furniture");

                    b.Navigation("Materials");
                });
#pragma warning restore 612, 618
        }
    }
}
