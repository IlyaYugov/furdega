using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class RemoveObsoleteColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaterialTypeId",
                table: "Furniture");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MaterialTypeId",
                table: "Furniture",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
