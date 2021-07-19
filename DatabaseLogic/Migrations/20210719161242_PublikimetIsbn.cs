using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class PublikimetIsbn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PublikimiId",
                table: "PjesemarresitPublikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PublikimId",
                table: "Isbnt",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "PublikimiId",
                table: "Isbnt",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PjesemarresitPublikimet_PublikimiId",
                table: "PjesemarresitPublikimet",
                column: "PublikimiId");

            migrationBuilder.CreateIndex(
                name: "IX_Isbnt_PublikimiId",
                table: "Isbnt",
                column: "PublikimiId");

            migrationBuilder.AddForeignKey(
                name: "FK_Isbnt_Publikimet_PublikimiId",
                table: "Isbnt",
                column: "PublikimiId",
                principalTable: "Publikimet",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PjesemarresitPublikimet_Publikimet_PublikimiId",
                table: "PjesemarresitPublikimet",
                column: "PublikimiId",
                principalTable: "Publikimet",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Isbnt_Publikimet_PublikimiId",
                table: "Isbnt");

            migrationBuilder.DropForeignKey(
                name: "FK_PjesemarresitPublikimet_Publikimet_PublikimiId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropIndex(
                name: "IX_PjesemarresitPublikimet_PublikimiId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropIndex(
                name: "IX_Isbnt_PublikimiId",
                table: "Isbnt");

            migrationBuilder.DropColumn(
                name: "PublikimiId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropColumn(
                name: "PublikimId",
                table: "Isbnt");

            migrationBuilder.DropColumn(
                name: "PublikimiId",
                table: "Isbnt");
        }
    }
}
