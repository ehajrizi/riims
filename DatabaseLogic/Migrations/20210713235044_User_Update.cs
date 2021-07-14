using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class User_Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Datelindja",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EmriMesem",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<char>(
                name: "Gjinia",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: 'F');

            migrationBuilder.AddColumn<string>(
                name: "LinkedIn",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Pershkrimi",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "QytetiCurrent",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Roli",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RrugaCurrent",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShtetiCurrent",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShtetiLindjes",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TitulliShkencor",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Vendlindja",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ZipKodiCurrent",
                table: "AspNetUsers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Datelindja",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "EmriMesem",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gjinia",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LinkedIn",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Pershkrimi",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "QytetiCurrent",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Roli",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RrugaCurrent",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ShtetiCurrent",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ShtetiLindjes",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TitulliShkencor",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Vendlindja",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ZipKodiCurrent",
                table: "AspNetUsers");
        }
    }
}
