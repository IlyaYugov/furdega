using Microsoft.EntityFrameworkCore.Migrations;

namespace Furdega.Migrations
{
    public partial class AddDefaultUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Login", "Password" },
                values: new object[] { 1, "admin", "QwErTy!@#$%^&*(QaZwSx" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
