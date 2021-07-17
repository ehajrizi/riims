using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class PublikimetUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Publikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Publikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Publikimet_UserId",
                table: "Publikimet",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Publikimet_AspNetUsers_UserId",
                table: "Publikimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Publikimet_AspNetUsers_UserId",
                table: "Publikimet");

            migrationBuilder.DropIndex(
                name: "IX_Publikimet_UserId",
                table: "Publikimet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Publikimet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Publikimet");
        }
    }
}
