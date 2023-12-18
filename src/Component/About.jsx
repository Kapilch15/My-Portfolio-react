import React from "react";
import Photo from "../Assets/HeroImages/myphoto.png";
import Frame from "../Assets/BG.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <header className=" bg-slate-800">
        <section className="flex  flex-col lg:w-11/12 mx-auto">
          <div className="flex justify-center mt-44">
            <h1 className="text-4xl font-medium text-gray-300">
              Know Who <span className="text-violet-400">I'm</span>
            </h1>
          </div>

          <div className="flex flex-row lg:px-20 px-4 py-10 w-full">
            <p className="lg:p-8 p-2  lg:px-40 px-2 text-gray-300">
              Hi Everyone, I am Kapil Chaudhary from Gr. Noida, India. I am a
              graduated student and No I pursuing MCA in Artificial intelligence
              & Data Science from Pune University. Additionally, I am
              enthusiastic about Machine Learning.
              <img
                className="mt-5 bg-cover px-8 hover:scale-90 hover:translate-y-3"
                src={Frame}
                alt="frame"
              />
            </p>
            <img
              src={Photo}
              alt="Heroimg"
              className="bg-cover hover:scale-105 shadow-xl shadow-blue-400 lg:w-[25rem] w-[6rem] lg:h-auto h-[8rem] rounded-full"
            />
          </div>
          <div className="flex flex-col lg:p-2 p-8 lg:px-[16rem] mb-12">
            <p className="text-cyan-400 text-xl font-semibold">
              Some of my hobbies are
            </p>
            <ul className=" text-gray-400 mt-5">
              <li className="flex gap-4">
                <FaHandPointRight className="text-orange-400" /> Playing Games
              </li>
              <li className="flex gap-4">
                <FaHandPointRight className="text-orange-400" /> Problem solving
              </li>
              <li className="flex gap-4">
                <FaHandPointRight className="text-orange-400" /> Listen music
              </li>
            </ul>
            <div className="mt-10">
              <p className="text-white text-4xl font-semibold text-center">
                Professional <span className="text-blue-400">Skillset</span>
              </p>

              <div className="grid grid-cols-3 lg:grid-cols-4 gap-12 mt-10">
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <FaHtml5 />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <DiCss3Full />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <IoLogoJavascript />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <FaReact />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <BiLogoTailwindCss />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <SiMongodb />
                </p>
                <p className="text-white text-6xl border-2 border-violet-800 lg:p-8 p-7 shadow-lg hover:shadow-cyan-100 lg:px-16 px-2">
                  <FaGithub />
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-white lg:text-center mt-10">
                Copyright ©2023 Kapil chaudhary
              </h6>
              <ul className="flex gap-5  text-3xl">
                <a
                  href="https://github.com/kapilch15"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kapil-chaudhary145"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaLinkedin />
                </a>
                <a className="cursor-pointer" target="_blank">
                  <FaInstagramSquare />
                </a>
              </ul>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default About;
