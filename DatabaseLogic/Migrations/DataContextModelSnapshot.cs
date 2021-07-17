﻿// <auto-generated />
using System;
using DatabaseLogic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DatabaseLogic.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.8");

            modelBuilder.Entity("Domain.Anetaresia", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriInstOrg")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pozita")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Anetaresite");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Datelindja")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriMesem")
                        .HasColumnType("TEXT");

                    b.Property<char>("Gjinia")
                        .HasColumnType("TEXT");

                    b.Property<string>("LinkedIn")
                        .HasColumnType("TEXT");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("QytetiCurrent")
                        .HasColumnType("TEXT");

                    b.Property<string>("Roli")
                        .HasColumnType("TEXT");

                    b.Property<string>("RrugaCurrent")
                        .HasColumnType("TEXT");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<string>("ShtetiCurrent")
                        .HasColumnType("TEXT");

                    b.Property<string>("ShtetiLindjes")
                        .HasColumnType("TEXT");

                    b.Property<string>("TitulliShkencor")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("Vendlindja")
                        .HasColumnType("TEXT");

                    b.Property<int>("ZipKodiCurrent")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Domain.Certifikimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataPerfundimtare")
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri_Institucionit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Certifikimet");
                });

            modelBuilder.Entity("Domain.Donatori", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriIDonatorit")
                        .HasColumnType("TEXT");

                    b.Property<int>("KontributiIDhene")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PershkrimiDonatorit")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Donatoret");
                });

            modelBuilder.Entity("Domain.Edukimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataPerfundimtare")
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri_i_Institucionit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Fusha_e_Studimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Edukimet");
                });

            modelBuilder.Entity("Domain.Eksperienca", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataPerfundimtare")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriInstitucionit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("NumriTelefonit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("PersoniKontaktues")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PunePrimare")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Eksperiencat");
                });

            modelBuilder.Entity("Domain.Gjuha", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Folur")
                        .HasColumnType("TEXT");

                    b.Property<string>("Shkruar")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<string>("ZgjedhGjuha")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Gjuhet");
                });

            modelBuilder.Entity("Domain.HonorandAward", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Institucioni")
                        .HasColumnType("TEXT");

                    b.Property<int>("Muaji")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Pozita")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Viti")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("HonorsandAwards");
                });

            modelBuilder.Entity("Domain.Isbn", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiNumrit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Numri")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Isbnt");
                });

            modelBuilder.Entity("Domain.MbikeqyresiTemave", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Fakulteti")
                        .HasColumnType("TEXT");

                    b.Property<string>("Institucioni")
                        .HasColumnType("TEXT");

                    b.Property<int>("Muaji")
                        .HasColumnType("INTEGER");

                    b.Property<string>("NiveliAkademik")
                        .HasColumnType("TEXT");

                    b.Property<string>("Studenti")
                        .HasColumnType("TEXT");

                    b.Property<string>("TitulliTemes")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Viti")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("MbikeqyresitTemave");
                });

            modelBuilder.Entity("Domain.Pjesemarresi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriIPjesemarresit")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<string>("roli")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Pjesemarresit");
                });

            modelBuilder.Entity("Domain.PjesemarresiPublikimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriIPjesemarresit")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<string>("roli")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("PjesemarresitPublikimet");
                });

            modelBuilder.Entity("Domain.Profili", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataELindjes")
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriIMesem")
                        .HasColumnType("TEXT");

                    b.Property<string>("FotoUrl")
                        .HasColumnType("TEXT");

                    b.Property<char>("Gjinia")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("NrTelefonit")
                        .HasColumnType("TEXT");

                    b.Property<string>("ShtetiILindjes")
                        .HasColumnType("TEXT");

                    b.Property<string>("TitulliShkencor")
                        .HasColumnType("TEXT");

                    b.Property<string>("VendiILindjes")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Profilet");
                });

            modelBuilder.Entity("Domain.Projekti", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Buxheti")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataFillimit")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataMbarimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriKlientit")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriProjektit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Institucioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Projektet");
                });

            modelBuilder.Entity("Domain.Publikimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("AutorKryesor")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Data")
                        .HasColumnType("TEXT");

                    b.Property<string>("Departamenti")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmertimiEvent")
                        .HasColumnType("TEXT");

                    b.Property<string>("Institucioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Kategoria")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lenda")
                        .HasColumnType("TEXT");

                    b.Property<string>("LinkuPublikimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiPublikimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Referenca")
                        .HasColumnType("TEXT");

                    b.Property<string>("Statusi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vendi")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Viti")
                        .HasColumnType("TEXT");

                    b.Property<int>("VolumiFaqeve")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Publikimet");
                });

            modelBuilder.Entity("Domain.Specializimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataPerfundimtare")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriInstitucionit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("UseriId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Specializimet");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Domain.Anetaresia", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Anetaresite")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Certifikimi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Certifikimet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Donatori", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Donatoret")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Edukimi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Edukimi")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Eksperienca", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Eksperiencat")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Gjuha", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Gjuhet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.HonorandAward", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("HonorsandAwards")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.MbikeqyresiTemave", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("MbikeqyresiTemave")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Pjesemarresi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Pjesemarresit")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.PjesemarresiPublikimi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("PjesemarresitPublikimet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Projekti", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Projektet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Publikimi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Publikimet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Domain.Specializimi", b =>
                {
                    b.HasOne("Domain.AppUser", "User")
                        .WithMany("Specializimet")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Navigation("Anetaresite");

                    b.Navigation("Certifikimet");

                    b.Navigation("Donatoret");

                    b.Navigation("Edukimi");

                    b.Navigation("Eksperiencat");

                    b.Navigation("Gjuhet");

                    b.Navigation("HonorsandAwards");

                    b.Navigation("MbikeqyresiTemave");

                    b.Navigation("Pjesemarresit");

                    b.Navigation("PjesemarresitPublikimet");

                    b.Navigation("Projektet");

                    b.Navigation("Publikimet");

                    b.Navigation("Specializimet");
                });
#pragma warning restore 612, 618
        }
    }
}
