"use client";

import { useState } from "react"; // Mengimpor useState dari React untuk mengelola state
import Image from "next/image"; // Mengimpor komponen Image dari Next.js untuk optimasi gambar
import React from "react";
export default function Portfolio() { // Mendefinisikan komponen utama Portfolio
  // Daftar kategori proyek
  const categories = ["All", "UI/UX", "Web Design", "Mobile Design", "Writing"]; // Menambahkan kategori "All"
  
  const [selectedCategory, setSelectedCategory] = useState("All"); // State untuk menyimpan kategori yang dipilih

  // Daftar proyek dengan kategori
  const projects = [
    {
      title: "KFCKU", // Judul proyek
      category: "Mobile Design", // Kategori proyek
      description:
        "KFCKU Mobile Application is a mobile application developed by fast food restaurant KFC. This application allows users to order food online, view the latest menus and promos, and get various benefits such as discounts and special offers. With KFCKU Mobile Application, customers can easily enjoy their favorite dishes from KFC without having to visit the restaurant directly.", // Deskripsi proyek
      image: "/Images/KFCKU.png", // Path gambar proyek
    },
    {
      title: "ChatApp", // Judul proyek
      category: "Mobile Design", // Kategori proyek
      description:
        "This application can be used as a chat, which features otp codes, entering phone numbers, chat menus, and adding contacts using phone numbers. Actors of this application only consist of users.", // Deskripsi proyek
      image: "/Images/ChatApp.png", // Path gambar proyek
    },
    {
      title: "Wireframe Checkout", // Judul proyek
      category: "Mobile Design", // Kategori proyek
      description:
        "In this checkout application wireframe I created several product storefronts that are sold with several menus that can be clicked by the user, and after the user chooses the product storefront, a checkout can be made to purchase the product.", // Deskripsi proyek
      image: "/Images/Wireframe Checkout.png", // Path gambar proyek
    },
    {
      title: "PT. Dirgantara Indonesia", // Judul proyek
      category: "Web Design", // Kategori proyek
      description:
        "The PT DI Portal application is an application for storing document archives, viewing news related to PT DI, socialization info, employee info, archive needs for PT DI employees. This re-design is done with the UX Heuristic Evaluation method.", // Deskripsi proyek
      image: "/Images/PT.Dirgantara Indonesia.png", // Path gambar proyek
    },
    {
      title: "PT. Windira Cipta Mandiri", // Judul proyek
      category: "Web Design", // Kategori proyek
      description:
        "This PT Windira Cipta Mandiri website consists of 2 actors, namely admins and bookers containing train tickets, airplane tickets, and also hotel reservations that can be made payments. ", // Deskripsi proyek
      image: "/Images/PT.Windira Cipta Mandiri.png", // Path gambar proyek
    },
    {
      title: "IDestinasi", // Judul proyek
      category: "Web Design", // Kategori proyek
      description:
        "The Idestination website application is an application that primarily has the aim of managing tours and booking tours. This website has 3 actors, namely admin, tourists, and tour managers. In this website, the features that are prioritized are tourist attraction information, explore tours, purchase tour tours.", // Deskripsi proyek
      image: "/Images/IDestinasi (3).png", // Path gambar proyek
    },
    {
      title:"E-Cycle",
      category: "UI/UX",
      description:" E-Cycle is a waste bank application that is equipped with several features to find the nearest location of the waste bank in the form of a map and is equipped with an education feature to increase public insight in managing waste and can exchange points earned into electronic money or cash.",
      image: "/Images/E-Cycle (2).png",
    },
    {
      title:"KFCKU",
      category: "UI/UX",
      description: "KFCKU Mobile Application is a mobile application developed by fast food restaurant KFC. This application allows users to order food online, view the latest menus and promos, and get various benefits such as discounts and special offers. With KFCKU Mobile Application, customers can easily enjoy their favorite dishes from KFC without having to visit the restaurant directly.",
      image: "/Images/KFCKU.png",
    },
    {
      title:"Jakaya Catering",
      category: "UI/UX",
      description: "Jakaya Catering application is a catering service application consisting of 3 actors, namely the merchant (catering service provider), admin (customer catering order manager and merchant manager), customer (as a catering service orderer). Application development is designed to help control catering services and catering reservations.",
      image: "/Images/Jayaka Catering.png",
    },
    {
      title:"Technical Writer Document",
      category: "Writing",
      description: "This technical writer involves website development, cost management, requirement management plan, system requirement software, scope management, and also system testing from the website development.",
      image: "/Images/Technical Writer.png",
    },
  ];

  // Filter proyek berdasarkan kategori yang dipilih
  const filteredProjects = selectedCategory === "All"
    ? projects // Jika kategori "All" dipilih, tampilkan semua proyek
    : projects.filter(project => project.category === selectedCategory); // Jika kategori lain dipilih, filter proyek sesuai kategori

  return (
    <div className="min-h-screen p-8"> {/* Wrapper utama dengan background abu-abu */}
      {/* Header dan Deskripsi Halaman */}
      <div className="max-w-4xl mx-auto text-center text-[#000000] mt-4"> {/* Container untuk header */}
        <h1 className="text-4xl font-bold font-times text-[#000000] mt-3">My Projects</h1> {/* Judul halaman portofolio */}
        <p className="text-[#000000] font-times mt-4"> {/* Deskripsi proyek */}
        The projects I have vary from UI/UX, Web design, mobile design, and writing. 
        Each project I have has various characteristics such as designing company websites, 
        campus projects, and bootcamp projects.
        </p>
        {/* Kategori Filter */}
        <div className="flex justify-center mt-7 font-times gap-3"> {/* Container untuk tombol filter kategori */}
          {categories.map((category, index) => (
            <button
            key={index}
            className={` flex flex-row-reverse px-2 py-2 rounded-lg ${selectedCategory === category ? "bg-[#082CB8] text-white" : "bg-[#FFF4EB]"}`} // Gaya tombol yang berubah jika kategori aktif
            onClick={() => setSelectedCategory(category)} // Mengubah kategori saat tombol diklik
            >
              {category} {/* Menampilkan kategori */}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto"> {/* Grid untuk menampilkan proyek */}
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-[#FFF4EB] p-4 shadow-md rounded-lg"> {/* Card proyek */}
            {/* Gambar Proyek */}
            <Image
              src={project.image} // Menampilkan gambar proyek
              alt={project.title} // Alternatif teks untuk aksesibilitas
              width={400} // Lebar gambar
              height={250} // Tinggi gambar
              className="rounded-lg" // Styling gambar dengan sudut membulat
              />
            {/* Judul dan Kategori Proyek */}
            <h2 className="text-xl font-bold mt-4 font-times text-start text-[#000000]">{project.title}</h2> {/* Judul proyek */}
            {/* <p className="text-sm text-[#000000] font-times">{project.category}</p> Kategori proyek dengan warna biru */}
            {/* Deskripsi Proyek */}
            <p className="text-[#000000] mt-5 text-s font-times text-start">{project.description}</p> {/* Deskripsi proyek */}
          </div>
        ))}
      </div>
    </div>
  );
}
