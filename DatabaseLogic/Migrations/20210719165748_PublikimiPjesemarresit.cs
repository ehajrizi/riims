using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class PublikimiPjesemarresit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_UserId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.RenameColumn(
                name: "UseriId",
                table: "PjesemarresitPublikimet",
                newName: "PublikimId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "PjesemarresitPublikimet",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_PjesemarresitPublikimet_UserId",
                table: "PjesemarresitPublikimet",
                newName: "IX_PjesemarresitPublikimet_AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_AppUserId",
                table: "PjesemarresitPublikimet",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_AppUserId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.RenameColumn(
                name: "PublikimId",
                table: "PjesemarresitPublikimet",
                newName: "UseriId");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "PjesemarresitPublikimet",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_PjesemarresitPublikimet_AppUserId",
                table: "PjesemarresitPublikimet",
                newName: "IX_PjesemarresitPublikimet_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_UserId",
                table: "PjesemarresitPublikimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
