"use client"
import React from "react";
export default function About  ()  {
    return (
        <div className=" flex flex-col justify-center items-center md:justify-center px-12 py-12 bg-white">
            <h1 className="font-bold text-5xl mb-4 font-times">About Me</h1>
            <p className="text-[#000000] text-center md:max-w-5xl mt-10 font-times">I have skills in creative thinking, design, writing, and also other things i like write poetry.
                My other experience as an UI/UX designer for 3 years,
                where I learned from working on college projects and where learn on bootcamp,
                then also have experience as a technical writer for 1 year where learned from college projects as well.
            </p>
            <div className="mt-20 flex flex-wrap justify-center gap-9"> {
                /*container untuk statistik pengelaman */}
                <div className="flex flex-col items-center ">
                    <span className="text-4xl font-bold text-[#FFEBDB] font-times">10</span>
                    <span className="font-bold text-[#082CB8] mt-2 font-times">UI/UX Designer</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-[#FFEBDB] font-times">5</span>
                    <span className="font-bold text-[#082CB8] mt-2 font-times">Web Design</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-[#FFEBDB] font-times">5</span>
                    <span className="font-bold text-[#082CB8] mt-2 font-times">Mobile Design</span>
                </div>
            </div>

        </div>
    )
};