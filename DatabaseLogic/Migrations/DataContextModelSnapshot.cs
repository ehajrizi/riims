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
                .HasAnnotation("ProductVersion", "5.0.6");

            modelBuilder.Entity("Domain.Edukimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<string>("DataPerfundimtare")
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

                    b.HasKey("Id");

                    b.ToTable("Edukimet");
                });

            modelBuilder.Entity("Domain.Eksperienca", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<string>("DataPerfundimtare")
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

                    b.HasKey("Id");

                    b.ToTable("Eksperiencat");
                });

            modelBuilder.Entity("Domain.MbikeqyresiTemave", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Departamenti")
                        .HasColumnType("TEXT");

                    b.Property<string>("Muaji")
                        .HasColumnType("TEXT");

                    b.Property<string>("NiveliAkademik")
                        .HasColumnType("TEXT");

                    b.Property<string>("Studenti")
                        .HasColumnType("TEXT");

                    b.Property<string>("TitulliTemes")
                        .HasColumnType("TEXT");

                    b.Property<string>("Viti")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("MbikeqyresitTemave");
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

                    b.Property<string>("Vendi")
                        .HasColumnType("TEXT");

                    b.Property<int>("VolumiFaqeve")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Publikimet");
                });

            modelBuilder.Entity("Domain.Specializimi", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("DataFillestare")
                        .HasColumnType("TEXT");

                    b.Property<string>("DataPerfundimtare")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriInstitucionit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lokacioni")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulli")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Specializimet");
                });
#pragma warning restore 612, 618
        }
    }
}
