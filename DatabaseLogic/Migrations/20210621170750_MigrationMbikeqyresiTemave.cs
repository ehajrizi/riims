using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseLogic.Migrations
{
    public partial class MigrationMbikeqyresiTemave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Departamenti",
                table: "MbikeqyresitTemave",
                newName: "Institucioni");

            migrationBuilder.AlterColumn<int>(
                name: "Viti",
                table: "MbikeqyresitTemave",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Muaji",
                table: "MbikeqyresitTemave",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Fakulteti",
                table: "MbikeqyresitTemave",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fakulteti",
                table: "MbikeqyresitTemave");

            migrationBuilder.RenameColumn(
                name: "Institucioni",
                table: "MbikeqyresitTemave",
                newName: "Departamenti");

            migrationBuilder.AlterColumn<string>(
                name: "Viti",
                table: "MbikeqyresitTemave",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "Muaji",
                table: "MbikeqyresitTemave",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");
        }
    }
}
