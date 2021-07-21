using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class PhotoMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Profilet");

            migrationBuilder.AddColumn<string>(
                name: "PhotoUrl",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotosId",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Url = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_PhotosId",
                table: "AspNetUsers",
                column: "PhotosId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Photos_PhotosId",
                table: "AspNetUsers",
                column: "PhotosId",
                principalTable: "Photos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Photos_PhotosId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_PhotosId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhotoUrl",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhotosId",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "Profilet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    DataELindjes = table.Column<string>(type: "TEXT", nullable: true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    EmriIMesem = table.Column<string>(type: "TEXT", nullable: true),
                    FotoUrl = table.Column<string>(type: "TEXT", nullable: true),
                    Gjinia = table.Column<char>(type: "TEXT", nullable: false),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    NrTelefonit = table.Column<string>(type: "TEXT", nullable: true),
                    ShtetiILindjes = table.Column<string>(type: "TEXT", nullable: true),
                    TitulliShkencor = table.Column<string>(type: "TEXT", nullable: true),
                    VendiILindjes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profilet", x => x.Id);
                });
        }
    }
}
