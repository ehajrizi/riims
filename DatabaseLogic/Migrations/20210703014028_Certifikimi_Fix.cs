using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class Certifikimi_Fix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Certifikimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri_Institucionit = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    DataFillestare = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataPerfundimtare = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certifikimet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Certifikimet");
        }
    }
}
