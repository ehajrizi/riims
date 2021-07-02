using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class SpDrop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Specializimet");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Specializimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    DataFillestare = table.Column<string>(type: "TEXT", nullable: true),
                    DataPerfundimtare = table.Column<string>(type: "TEXT", nullable: true),
                    EmriInstitucionit = table.Column<string>(type: "TEXT", nullable: true),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specializimet", x => x.Id);
                });
        }
    }
}
