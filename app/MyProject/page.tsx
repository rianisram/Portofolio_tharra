"use client"; // Menggunakan directive "use client" karena ada penggunaan useState dan useEffect
import Footers from "../component/Footers";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react"; // Mengimpor hooks useEffect dan useState dari React
import Image from "next/image";

interface Project { // Mendefinisikan tipe data untuk proyek
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function MyProjects() { // Mendefinisikan komponen utama MyProjects
  const [projects, setProjects] = useState<Project[]>([]); // State untuk menyimpan semua proyek dari API
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]); // State untuk proyek yang difilter
  const [activeCategory, setActiveCategory] = useState<string>("All"); // State untuk kategori yang dipilih

  useEffect(() => { // Menggunakan useEffect untuk fetch data saat komponen pertama kali dirender
    fetch("http://localhost:3000/api/project") // Memanggil API lokal untuk mendapatkan daftar proyek
      .then((res) => res.json()) // Mengonversi response menjadi JSON
      .then((data) => { // Setelah data didapatkan, lakukan:
        setProjects(data); // Simpan semua proyek dalam state projects
        setFilteredProjects(data); // Awalnya, semua proyek juga masuk ke state filteredProjects
      })
      .catch((error) => console.error("Error fetching projects:", error)); // Menampilkan error jika gagal fetch data
  }, []); // useEffect hanya dijalankan sekali saat komponen pertama kali dimuat

  const filterProjects = (category: string) => { // Fungsi untuk memfilter proyek berdasarkan kategori
    setActiveCategory(category); // Set kategori aktif sesuai tombol yang diklik
    if (category === "All") { // Jika kategori "All" dipilih
      setFilteredProjects(projects); // Tampilkan semua proyek
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category)); // Filter proyek berdasarkan kategori
    }
  };

  return (
    <>
    <Navbar />
    
    <div className="container mx-auto p-4 mt-4"> {/* Container utama dengan padding */}
      <h2 className="text-5xl font-bold text-center mb-4 font-times mt-5">My Projects</h2> {/* Judul halaman */}
      <p className="text-center mb-3 mt-5 font-times text-lg "> {/* Paragraf deskripsi proyek */}
      The projects I have vary from UI/UX, Web design, mobile design, and writing.
       Each project I have has various characteristics such as designing company websites, campus projects, and bootcamp projects.
      </p>

      <div className="flex justify-center mb-6 mt-7 md:justify-center gap-4" > {/* Container untuk tombol kategori */}
        {["All","UI/UX","Web Design", "Mobile Design", "Writing"].map((category) => ( // Looping kategori
          <button
          key={category} // Key unik untuk setiap tombol kategori
          onClick={() => filterProjects(category)} // Memanggil fungsi filterProjects saat tombol diklik
          className={`px-2 py-2 border rounded-lg ${
            activeCategory === category ? "bg-[#082CB8] text-white font-times md:justify-between" : "bg-gray-200"
          }`} // Mengubah warna tombol jika kategori aktif
          >
            {category} {/* Menampilkan nama kategori */}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 "> {/* Grid untuk menampilkan daftar proyek */}
        {filteredProjects.map((project) => ( // Looping proyek yang sudah difilter
          <div key={project.id} className="border p-7 pr-2 pl-2 pt-1 pb-1 rounded-lg shadow-lg bg-[#FFF4EB]"> {/* Card proyek */}
            <Image src={project.image} alt={project.title} className="h-25 w-25 object-cover mb-2 rounded mt-2" /> {/* Gambar proyek */}
            <h3 className="text-xl font-semibold font-times mt-2 ">{project.title}</h3> {/* Judul proyek */}
            <p className="text-[#000000] font-times mt-2 text-ligth">{project.description}</p> {/* Deskripsi proyek */}
          </div>
        ))}
      </div>
    </div>
    <Footers />
    </>
  );
}
