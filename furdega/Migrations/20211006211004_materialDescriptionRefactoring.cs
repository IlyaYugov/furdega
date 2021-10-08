using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class materialDescriptionRefactoring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "MaterialBrands");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Materials");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "MaterialBrands",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
