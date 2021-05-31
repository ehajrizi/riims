using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Publikimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    EmertimiEvent = table.Column<string>(type: "TEXT", nullable: true),
                    Data = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Vendi = table.Column<string>(type: "TEXT", nullable: true),
                    Statusi = table.Column<string>(type: "TEXT", nullable: true),
                    LlojiPublikimit = table.Column<string>(type: "TEXT", nullable: true),
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true),
                    Departamenti = table.Column<string>(type: "TEXT", nullable: true),
                    Lenda = table.Column<string>(type: "TEXT", nullable: true),
                    Kategoria = table.Column<string>(type: "TEXT", nullable: true),
                    LinkuPublikimit = table.Column<string>(type: "TEXT", nullable: true),
                    VolumiFaqeve = table.Column<int>(type: "INTEGER", nullable: false),
                    Referenca = table.Column<string>(type: "TEXT", nullable: true),
                    AutorKryesor = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Publikimet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Publikimet");
        }
    }
}
