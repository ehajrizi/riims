using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MigrationAnetaresite : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Anetaresite",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriInstOrg = table.Column<string>(type: "TEXT", nullable: true),
                    Pozita = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Anetaresite", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            {
            migrationBuilder.DropTable(
                name: "Anetaresite");
            }
        }
    }
}
