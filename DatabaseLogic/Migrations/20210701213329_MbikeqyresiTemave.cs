using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MbikeqyresiTemave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HonorsandAwards");

            migrationBuilder.DropTable(
                name: "MbikeqyresitTemave");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HonorsandAwards",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true),
                    Muaji = table.Column<int>(type: "INTEGER", nullable: false),
                    Pozita = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    Viti = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HonorsandAwards", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MbikeqyresitTemave",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Fakulteti = table.Column<string>(type: "TEXT", nullable: true),
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true),
                    Muaji = table.Column<int>(type: "INTEGER", nullable: false),
                    NiveliAkademik = table.Column<string>(type: "TEXT", nullable: true),
                    Studenti = table.Column<string>(type: "TEXT", nullable: true),
                    TitulliTemes = table.Column<string>(type: "TEXT", nullable: true),
                    Viti = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MbikeqyresitTemave", x => x.Id);
                });
        }
    }
}
