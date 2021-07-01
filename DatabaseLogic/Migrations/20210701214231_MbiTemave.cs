using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MbiTemave : Migration
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
                    Muaji = table.Column<int>(type: "INTEGER", nullable: false),
                    Viti = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true),
                    Fakulteti = table.Column<string>(type: "TEXT", nullable: true),
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
