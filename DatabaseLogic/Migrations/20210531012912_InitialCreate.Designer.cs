﻿// <auto-generated />
using System;
using DatabaseLogic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DatabaseLogic.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210531012912_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.6");

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
#pragma warning restore 612, 618
        }
    }
}
