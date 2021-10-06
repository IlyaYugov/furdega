using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class ModelBrandLogic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_MaterialTypes_MaterialTypeId",
                table: "Furniture");

            migrationBuilder.DropForeignKey(
                name: "FK_Materials_MaterialTypes_MaterialTypeId",
                table: "Materials");

            migrationBuilder.DropTable(
                name: "MaterialTypes");

            migrationBuilder.DropIndex(
                name: "IX_Materials_MaterialTypeId",
                table: "Materials");

            migrationBuilder.DropIndex(
                name: "IX_Furniture_MaterialTypeId",
                table: "Furniture");

            migrationBuilder.DropColumn(
                name: "MaterialTypeId",
                table: "Materials");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Materials",
                newName: "PreviewImageUrl");

            migrationBuilder.RenameColumn(
                name: "ImageId",
                table: "Materials",
                newName: "PreviewImageId");

            migrationBuilder.AddColumn<Guid>(
                name: "MainImageId",
                table: "Materials",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "MainImageUrl",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MaterialBrands",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaterialId = table.Column<int>(type: "int", nullable: false),
                    MainImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MainImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Images = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialBrands", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaterialBrands_Materials_MaterialId",
                        column: x => x.MaterialId,
                        principalTable: "Materials",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MaterialBrands_MaterialId",
                table: "MaterialBrands",
                column: "MaterialId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MaterialBrands");

            migrationBuilder.DropColumn(
                name: "MainImageId",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "MainImageUrl",
                table: "Materials");

            migrationBuilder.RenameColumn(
                name: "PreviewImageUrl",
                table: "Materials",
                newName: "ImageUrl");

            migrationBuilder.RenameColumn(
                name: "PreviewImageId",
                table: "Materials",
                newName: "ImageId");

            migrationBuilder.AddColumn<int>(
                name: "MaterialTypeId",
                table: "Materials",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "MaterialTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Materials_MaterialTypeId",
                table: "Materials",
                column: "MaterialTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_MaterialTypeId",
                table: "Furniture",
                column: "MaterialTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_MaterialTypes_MaterialTypeId",
                table: "Furniture",
                column: "MaterialTypeId",
                principalTable: "MaterialTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_MaterialTypes_MaterialTypeId",
                table: "Materials",
                column: "MaterialTypeId",
                principalTable: "MaterialTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
