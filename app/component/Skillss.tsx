"use client"
import React from "react";

const Skillss = () => {
    return (
        <div className="flex flex-col justify-center md:justify-center py-10 ml-11 mr-11">
            <h1 className="font-bold text-[#000000] font-times text-6xl text-center mt-5">Skills</h1>
            <p className="font-times text-center text-2xl mt-11">These are the skills I have for
                more details by my projects or my experience</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-11">
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
                    <h3 className="font-bold text-2xl font-times mt-4" >UI/UX</h3>
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
                    <p className="text-[#000000] text-left text-sm m font-times"> Currently, i have experience since 2023. That is designing for redesign or create from cratch.</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className=" text-[#3f36f3]" viewBox="0 0 16 16">
                        <path fill="#082CB8" d="M6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                        <path fill="#082CB8" fillRule="evenodd" d="M4.5 0A1.5 1.5 0 0 0 3 1.5v13A1.5 1.5 0 0 0 4.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 11.5 0zM4 1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H4zM4 13v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V13zm0-1h8V5H4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Mobile Design</h3>
                    <p className="text-[#000000] text-light font-times"> I have experience during bootcamp on 2024 and collage task since 2022. It takes usability testing only</p>
                </div>
                <div className="p-6 bg-[#FFEBDB] rounden-lg shadow-md flex flex-col item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="text-[#3f36f3]" viewBox="0 0 14 14">
                        <path fill="#082CB8" fillRule="evenodd" d="M1.718 1.594a.197.197 0 0 0-.198.197v8.521h8.919V7.947a.75.75 0 1 1 1.5 0v4.262c0 .937-.76 1.697-1.697 1.697H1.716c-.937 0-1.697-.76-1.697-1.697V1.791A1.7 1.7 0 0 1 1.718.094h6.156a.75.75 0 0 1 0 1.5zm1.894 1.413a.625.625 0 1 0 0 1.25h1.894a.625.625 0 1 0 0-1.25zM2.987 6.5c0-.345.28-.625.625-.625h.947a.625.625 0 1 1 0 1.25h-.947a.625.625 0 0 1-.625-.625m6.332 1.034a.5.5 0 0 0 .266-.14l4.099-4.118a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-1.42 0L7.088 4.892a.5.5 0 0 0-.14.273l-.36 2.182a.5.5 0 0 0 .583.573z" clipRule="evenodd" /></svg>
                    <h3 className="font-bold text-2xl font-times mt-4">Writing</h3>
                    <p className="text-[#000000] text-light font-times"> It’s like writing poetry, copywriter, search engine optimization (SEO digital marketing), technical writer, etc.</p>
                </div>
            </div>
        </div>
    )
}
export default Skillss;