using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MigrationProfili : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Profilet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TitulliShkencor = table.Column<string>(type: "TEXT", nullable: true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    EmriIMesem = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    DataELindjes = table.Column<string>(type: "TEXT", nullable: true),
                    VendiILindjes = table.Column<string>(type: "TEXT", nullable: true),
                    ShtetiILindjes = table.Column<string>(type: "TEXT", nullable: true),
                    NrTelefonit = table.Column<string>(type: "TEXT", nullable: true),
                    Gjinia = table.Column<char>(type: "TEXT", nullable: false),
                    FotoUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profilet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Profilet");
        }
    }
}
