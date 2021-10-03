using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class CreateFurnitureTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Furniture",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeforeImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BeforeImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AfterImageId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AfterImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FurnitureTypeId = table.Column<int>(type: "int", nullable: false),
                    MaterialTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Furniture", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Furniture_FurnitureTypes_FurnitureTypeId",
                        column: x => x.FurnitureTypeId,
                        principalTable: "FurnitureTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Furniture_MaterialTypes_MaterialTypeId",
                        column: x => x.MaterialTypeId,
                        principalTable: "MaterialTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_FurnitureTypeId",
                table: "Furniture",
                column: "FurnitureTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Furniture_MaterialTypeId",
                table: "Furniture",
                column: "MaterialTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Furniture");
        }
    }
}
