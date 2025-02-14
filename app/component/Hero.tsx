'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import Tharra from "@/app/assets/tharra.jpeg"

export default function Hero() {
  const typingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (typingRef.current) {
      typeEffect(typingRef.current, 150);
    } else {
      console.error("Element with class 'typing-effect' not found");
    }
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[#000000] font-semibold text-2xl mt-2 font-times">Hi, I am</h2>
          <h1 ref={typingRef} className="text-7xl md:text-4xl font-bold text-blue-600 typing-effect mt-2 font-times">
            Tharra Zebadiah Alanna Budi
          </h1>
          <p className="mt-4 text-gray-600 font-times">
            I am an Information Systems student at Telkom University. I have potential in organization,
            community, and working under pressure. Another thing, I have spirit, commitment, and optimism
            and high confidence to try new things.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="/CV ATS-Tharra Zebadiah Alanna Budi.pdf" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 font-times">CV ATS</a>
            <a href="/CV RESUME_THARRA ZEBADIAH ALANNA BUDI.pdf" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 font-times">CV Resume</a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-center mt-6 md:mt-0">
          <Image
            src={Tharra}
            width={300}
            height={300}
            alt="Profile Picture"
            className="rounded-lg shadow-lg"
          />
          <ul className="mt-4  flex justify-center gap-6">
            <li>
              <a
                href="https://www.instagram.com/tharrazbdh/"
                rel="noreferrer"
                target="_blank"
                className="text-[#0d1c1c] transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <svg className="size-9 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            {/* LinkedIn Icon */}
            <li>
              <a
                href="https://www.linkedin.com/in/tharra-z/"
                rel="noreferrer"
                target="_blank"
                className="text-[#000000] transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z">
                </path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function typeEffect(element: HTMLElement, speed: number) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
