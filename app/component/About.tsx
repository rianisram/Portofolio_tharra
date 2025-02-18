"use client"
import React from "react";

export default function About () {
    return (
        <div className="flex flex-col">
            <main className="flex-grow flex flex-col justify-center items-center md:justify-center px-3 py-3">
                <h1 className="font-bold text-5xl mb-2 font-times">About Me</h1>
                <p className="text-[#000000] text-center md:max-w-4xl mt-6 font-times">
                    I have skills in creative thinking, design, writing, and also other things I like write poetry.
                    My other experience as a UI/UX designer for 3 years,
                    where I learned from working on college projects and where learn on bootcamp,
                    then also have experience as a technical writer for 1 year where learned from college projects as well.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-6 ">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-[#FFEBDB] font-times">10</span>
                        <span className="font-bold text-[#082CB8] font-times">UI/UX Designer</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-[#FFEBDB] font-times">5</span>
                        <span className="font-bold text-[#082CB8] font-times">Web Design</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-[#FFEBDB] font-times">5</span>
                        <span className="font-bold text-[#082CB8] font-times">Mobile Design</span>
                    </div>
                </div>
            </main>
        </div>
    )
}
