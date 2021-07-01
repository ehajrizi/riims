using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class Fix_Eksp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eksperiencat",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriInstitucionit = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    PunePrimare = table.Column<bool>(type: "INTEGER", nullable: false),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    DataFillestare = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataPerfundimtare = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    PersoniKontaktues = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    NumriTelefonit = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eksperiencat", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Eksperiencat");
        }
    }
}
