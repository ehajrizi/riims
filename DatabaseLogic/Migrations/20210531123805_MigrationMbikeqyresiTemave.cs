using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MigrationMbikeqyresiTemave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MbikeqyresitTemave",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TitulliTemes = table.Column<string>(type: "TEXT", nullable: true),
                    Studenti = table.Column<string>(type: "TEXT", nullable: true),
                    Muaji = table.Column<string>(type: "TEXT", nullable: true),
                    Viti = table.Column<string>(type: "TEXT", nullable: true),
                    Departamenti = table.Column<string>(type: "TEXT", nullable: true),
                    NiveliAkademik = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MbikeqyresitTemave", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MbikeqyresitTemave");
        }
    }
}
