using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class AddPreviewImageInMaterialImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PreviewImageId",
                table: "MaterialBrands",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "PreviewImageUrl",
                table: "MaterialBrands",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PreviewImageId",
                table: "MaterialBrands");

            migrationBuilder.DropColumn(
                name: "PreviewImageUrl",
                table: "MaterialBrands");
        }
    }
}
