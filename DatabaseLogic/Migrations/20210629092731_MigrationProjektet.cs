using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MigrationProjektet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Projektet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriProjektit = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    DataFillimit = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataMbarimit = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Buxheti = table.Column<int>(type: "INTEGER", nullable: false),
                    EmriKlientit = table.Column<string>(type: "TEXT", nullable: true),
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projektet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Projektet");
        }
    }
}
