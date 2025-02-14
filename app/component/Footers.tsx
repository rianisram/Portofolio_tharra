import React from "react"; // Mengimpor React untuk membuat komponen
 // Mengimpor Link dari Next.js untuk navigasi tanpa reload
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Mengimpor ikon dari react-icons


export default function Footers () {
    return (
        <footer className="bg-[#FFF4EB] mt-4 p-1 md:justify-center items-end">
            {/* Footer utama dengan background biru dan teks putih */}


            {/* Bagian atas footer dengan background peach dan teks hitam */}
            <div className="mt-8 justify-center flex ">
            <h2 className="font-bold text-lg text-[#000000]">
                Tharra Zebadiah Alanna Budi&apos;s Portfolio
            </h2>
            </div>
            {/* Judul utama footer */}

            <nav className="flex justify-center  mt-8">
                <ol className="flex justify-between row-auto gap-4 items-center">
                    <li><a href="" className="text-black font-times ">Home</a></li>
                    <li><a href="/About" className="text-black font-times">About Me</a></li>
                    <li><a href="/Skills" className="text-black font-times">Skills</a></li>
                    <li><a href="/MyProject" className="text-black font-times">Project</a></li>
                    <li><a href="/Servicess" className="text-black font-times">Services</a></li>
                </ol>
            </nav>

            <div className="flex justify-center space-x-4 mt-4 text-[#000000]">
                {/* Bagian ikon sosial media dengan jarak antar ikon */}
                <a href="https://www.instagram.com/tharrazbdh/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl hover:text-gray-500 font-times" />
                </a>
                {/* Ikon Instagram dengan efek hover */}

                <a href="https://www.linkedin.com/in/tharra-z/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-gray-500 font-times" />
                </a>
                {/* Ikon LinkedIn dengan efek hover */}
            </div>
            <div className="p-4 bg-[#082CB8] flex justify-center mt-4">
                <p className="font-sm font-times  text-white ">
                    © 2025 Tharra Z, All Rights Reserved., Inc.
                </p>
            </div>
            {/* Copyright di bagian bawah footer */}
        </footer>
    )
}