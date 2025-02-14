"use client"
import React from "react";
import Navbar from "../component/Navbar";
import Footers from "../component/Footers";

export default function Servicess() {
    return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center md:justify-center py-10 ml-8 mr-9 ">
            <h1 className="font-bold text-[#000000] font-times text-6xl text-center mt-5">Services</h1>
            <p className="font-times text-center text-2xl mt-11">There’s the projects that I have done,
                I have a service from the results of the projects. I have services that I can offer starting from.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-11">
                {/* Card Tiap Skill */}
                <div className="p-9 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                    {/* <span className="text-6xl"> 🐍</span> */}
                    <svg className=" text-[#3f36f3]" width="100" height="100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"
                            clipRule="evenodd"
                            />
                    </svg>
                    <h3 className="font-bold text-2xl font-times mt-4" >UI/UX Design</h3>
                    <p className="text-[#000000] text-left  text-sm font-times">
                        I have 10 experience working UI/UX since 2022.
                        Therefore 5 for web design and 5 for mobile design.
                        It takes usability testing and heuristic evaluation method
                    </p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="text-[#3f36f3]"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 6H5v7a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17zM6 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" /></g>
                    </svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Web Design</h3>
                    <p className="text-[#000000] text-left text-sm m font-times">Currently, i have experience since 2023. That is designing for redesign or create from cratch.</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className=" text-[#3f36f3]" viewBox="0 0 16 16">
                        <path fill="#082CB8" d="M6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                        <path fill="#082CB8" fillRule="evenodd" d="M4.5 0A1.5 1.5 0 0 0 3 1.5v13A1.5 1.5 0 0 0 4.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 11.5 0zM4 1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H4zM4 13v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V13zm0-1h8V5H4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Mobile Design</h3>
                    <p className="text-[#000000] text-light font-times"> I have experience during bootcamp on 2024 and collage task since 2022. I takes usability testing only. </p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 14 14">
                        <path fill="#082CB8" fillRule="evenodd" d="M1.718 1.594a.197.197 0 0 0-.198.197v8.521h8.919V7.947a.75.75 0 1 1 1.5 0v4.262c0 .937-.76 1.697-1.697 1.697H1.716c-.937 0-1.697-.76-1.697-1.697V1.791A1.7 1.7 0 0 1 1.718.094h6.156a.75.75 0 0 1 0 1.5zm1.894 1.413a.625.625 0 1 0 0 1.25h1.894a.625.625 0 1 0 0-1.25zM2.987 6.5c0-.345.28-.625.625-.625h.947a.625.625 0 1 1 0 1.25h-.947a.625.625 0 0 1-.625-.625m6.332 1.034a.5.5 0 0 0 .266-.14l4.099-4.118a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-1.42 0L7.088 4.892a.5.5 0 0 0-.14.273l-.36 2.182a.5.5 0 0 0 .583.573z" clipRule="evenodd" /></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Writing</h3>
                    <p className="text-[#000000] text-light font-times"> It’s like writing poetry, copywriter, search engine optimization (SEO digital marketing), technical writer, etc.</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"/></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Usability Testingg</h3>
                    <p className="text-[#000000] text-light font-times"> I’m doing usability testing is carried out with maze.
                        co application and create documents for usability testing, contains testing methods,
                        testing questions, and interview testing results.</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 32 32"><path fill="currentColor" d="M13 27h-3c-3.86 0-7-3.14-7-7v-2h2v2c0 2.757 2.243 5 5 5h3zm12 0h-4c-1.102 0-2-.897-2-2v-4c0-1.102.898-2 2-2h4c1.103 0 2 .898 2 2v4c0 1.103-.897 2-2 2m-4-6h-.002L21 25h4v-4zm4-6h2v2h-2zm4 4h2v2h-2zm0 4h2v2h-2zm-14-2h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm4 0h2v2h-2zm8-16v-2c0-3.86-3.14-7-7-7h-7v2h7c2.757 0 5 2.243 5 5v2zM10 8V4a2 2 0 0 0-2-2H2v13h2v-5h1.48l2.34 5H10l-2.33-5H8a2 2 0 0 0 2-2M4 4h4v4H4z"/></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Design System</h3>
                    <p className="text-[#000000] text-light font-times"> Create components of the design that will be applied to the creation of mobile design and web design (color components, typhography, etc.)</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 24 24"><path fill="currentColor" d="M11.192 13.808h5.616v-2.616h-5.616zm-.884.884v-4.384h7.384v4.384zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192"/></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Wireframing</h3>
                    <p className="text-[#000000] text-light font-times"> Before making a full design, I have experience to make wireframing first in order to make it easier to make a design.</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5zm2 0V2h7a2 2 0 0 1 2 2v.126a5.09 5.09 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2"/><path d="M17.447 8.08a1.09 1.09 0 0 1 1.187.238l.002.001a1.09 1.09 0 0 1 0 1.539l-.377.377l-1.54-1.542l.373-.374l.002-.001q.152-.154.353-.237Zm-2.143 2.027l-4.644 4.644l-.385 1.924l1.925-.385l4.644-4.642l-1.54-1.54Zm2.56-4.11a3.1 3.1 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275"/></g></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Copywriter</h3>
                    <p className="text-[#000000] text-light font-times">I have experience in copywriter, namely making writing in advertising posters.</p>
                </div>
            </div>
        </div>
        <Footers />
        </>
    )
}