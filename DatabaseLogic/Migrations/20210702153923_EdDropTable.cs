﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class EdDropTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Edukimet");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.CreateTable(
                name: "Edukimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    DataFillestare = table.Column<string>(type: "TEXT", nullable: true),
                    DataPerfundimtare = table.Column<string>(type: "TEXT", nullable: true),
                    Emri_i_Institucionit = table.Column<string>(type: "TEXT", nullable: true),
                    Fusha_e_Studimit = table.Column<string>(type: "TEXT", nullable: true),
                    Lokacioni = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Edukimet", x => x.Id);
                });

            
        }
    }
}
