using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class ProjektiDonatoret : Migration
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
                    Institucioni = table.Column<string>(type: "TEXT", nullable: true),
                    UseriId = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projektet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Projektet_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Donatoret",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriIDonatorit = table.Column<string>(type: "TEXT", nullable: true),
                    PershkrimiDonatorit = table.Column<string>(type: "TEXT", nullable: true),
                    KontributiIDhene = table.Column<int>(type: "INTEGER", nullable: false),
                    ProjektId = table.Column<string>(type: "TEXT", nullable: true),
                    ProjektiId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donatoret", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Donatoret_Projektet_ProjektiId",
                        column: x => x.ProjektiId,
                        principalTable: "Projektet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Pjesemarresit",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriIPjesemarresit = table.Column<string>(type: "TEXT", nullable: true),
                    roli = table.Column<string>(type: "TEXT", nullable: true),
                    ProjektId = table.Column<string>(type: "TEXT", nullable: true),
                    ProjektiId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pjesemarresit", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pjesemarresit_Projektet_ProjektiId",
                        column: x => x.ProjektiId,
                        principalTable: "Projektet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Donatoret_ProjektiId",
                table: "Donatoret",
                column: "ProjektiId");

            migrationBuilder.CreateIndex(
                name: "IX_Pjesemarresit_ProjektiId",
                table: "Pjesemarresit",
                column: "ProjektiId");

            migrationBuilder.CreateIndex(
                name: "IX_Projektet_UserId",
                table: "Projektet",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Donatoret");

            migrationBuilder.DropTable(
                name: "Pjesemarresit");

            migrationBuilder.DropTable(
                name: "Projektet");
        }
    }
}
