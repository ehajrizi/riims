using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class Eksp_Date : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DataFillestare",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true,
                defaultValue: DateTime.Now,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DataPerfundimtare",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true,
                defaultValue: DateTime.Now,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DataFillestare",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "DataPerfundimtare",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
