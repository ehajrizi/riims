using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class UserEntityRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Specializimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Specializimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Projektet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Projektet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "PjesemarresitPublikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "PjesemarresitPublikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Pjesemarresit",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Pjesemarresit",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "MbikeqyresitTemave",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "MbikeqyresitTemave",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "HonorsandAwards",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "HonorsandAwards",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Gjuhet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Gjuhet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Eksperiencat",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Edukimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Edukimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Donatoret",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Donatoret",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Certifikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Certifikimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Anetaresite",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UseriId",
                table: "Anetaresite",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Specializimet_UserId",
                table: "Specializimet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Projektet_UserId",
                table: "Projektet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_PjesemarresitPublikimet_UserId",
                table: "PjesemarresitPublikimet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Pjesemarresit_UserId",
                table: "Pjesemarresit",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MbikeqyresitTemave_UserId",
                table: "MbikeqyresitTemave",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_HonorsandAwards_UserId",
                table: "HonorsandAwards",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Gjuhet_UserId",
                table: "Gjuhet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Eksperiencat_UserId",
                table: "Eksperiencat",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Edukimet_UserId",
                table: "Edukimet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Donatoret_UserId",
                table: "Donatoret",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Certifikimet_UserId",
                table: "Certifikimet",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Anetaresite_UserId",
                table: "Anetaresite",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Anetaresite_AspNetUsers_UserId",
                table: "Anetaresite",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Certifikimet_AspNetUsers_UserId",
                table: "Certifikimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Donatoret_AspNetUsers_UserId",
                table: "Donatoret",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Edukimet_AspNetUsers_UserId",
                table: "Edukimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Eksperiencat_AspNetUsers_UserId",
                table: "Eksperiencat",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Gjuhet_AspNetUsers_UserId",
                table: "Gjuhet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_HonorsandAwards_AspNetUsers_UserId",
                table: "HonorsandAwards",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MbikeqyresitTemave_AspNetUsers_UserId",
                table: "MbikeqyresitTemave",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Pjesemarresit_AspNetUsers_UserId",
                table: "Pjesemarresit",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_UserId",
                table: "PjesemarresitPublikimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Projektet_AspNetUsers_UserId",
                table: "Projektet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Specializimet_AspNetUsers_UserId",
                table: "Specializimet",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Anetaresite_AspNetUsers_UserId",
                table: "Anetaresite");

            migrationBuilder.DropForeignKey(
                name: "FK_Certifikimet_AspNetUsers_UserId",
                table: "Certifikimet");

            migrationBuilder.DropForeignKey(
                name: "FK_Donatoret_AspNetUsers_UserId",
                table: "Donatoret");

            migrationBuilder.DropForeignKey(
                name: "FK_Edukimet_AspNetUsers_UserId",
                table: "Edukimet");

            migrationBuilder.DropForeignKey(
                name: "FK_Eksperiencat_AspNetUsers_UserId",
                table: "Eksperiencat");

            migrationBuilder.DropForeignKey(
                name: "FK_Gjuhet_AspNetUsers_UserId",
                table: "Gjuhet");

            migrationBuilder.DropForeignKey(
                name: "FK_HonorsandAwards_AspNetUsers_UserId",
                table: "HonorsandAwards");

            migrationBuilder.DropForeignKey(
                name: "FK_MbikeqyresitTemave_AspNetUsers_UserId",
                table: "MbikeqyresitTemave");

            migrationBuilder.DropForeignKey(
                name: "FK_Pjesemarresit_AspNetUsers_UserId",
                table: "Pjesemarresit");

            migrationBuilder.DropForeignKey(
                name: "FK_PjesemarresitPublikimet_AspNetUsers_UserId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropForeignKey(
                name: "FK_Projektet_AspNetUsers_UserId",
                table: "Projektet");

            migrationBuilder.DropForeignKey(
                name: "FK_Specializimet_AspNetUsers_UserId",
                table: "Specializimet");

            migrationBuilder.DropIndex(
                name: "IX_Specializimet_UserId",
                table: "Specializimet");

            migrationBuilder.DropIndex(
                name: "IX_Projektet_UserId",
                table: "Projektet");

            migrationBuilder.DropIndex(
                name: "IX_PjesemarresitPublikimet_UserId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropIndex(
                name: "IX_Pjesemarresit_UserId",
                table: "Pjesemarresit");

            migrationBuilder.DropIndex(
                name: "IX_MbikeqyresitTemave_UserId",
                table: "MbikeqyresitTemave");

            migrationBuilder.DropIndex(
                name: "IX_HonorsandAwards_UserId",
                table: "HonorsandAwards");

            migrationBuilder.DropIndex(
                name: "IX_Gjuhet_UserId",
                table: "Gjuhet");

            migrationBuilder.DropIndex(
                name: "IX_Eksperiencat_UserId",
                table: "Eksperiencat");

            migrationBuilder.DropIndex(
                name: "IX_Edukimet_UserId",
                table: "Edukimet");

            migrationBuilder.DropIndex(
                name: "IX_Donatoret_UserId",
                table: "Donatoret");

            migrationBuilder.DropIndex(
                name: "IX_Certifikimet_UserId",
                table: "Certifikimet");

            migrationBuilder.DropIndex(
                name: "IX_Anetaresite_UserId",
                table: "Anetaresite");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Specializimet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Specializimet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Projektet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Projektet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "PjesemarresitPublikimet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Pjesemarresit");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Pjesemarresit");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MbikeqyresitTemave");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "MbikeqyresitTemave");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "HonorsandAwards");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "HonorsandAwards");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Gjuhet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Gjuhet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Eksperiencat");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Eksperiencat");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Edukimet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Edukimet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Donatoret");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Donatoret");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Certifikimet");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Certifikimet");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Anetaresite");

            migrationBuilder.DropColumn(
                name: "UseriId",
                table: "Anetaresite");
        }
    }
}
