import React, { useState } from "react";
import Photo from "../../Assets/HeroImages/myphoto.png";
import Skill from "./Skill";
import { GoMail } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";
import BGIMG from "../../Assets/bg-img2.jpg";

const Header = () => {
  return (
    <>
      <main
        className="hover:bg-pink-100"
        style={{
          backgroundImage: `url(${BGIMG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className=" justify-center items-center flex mt-40 mb-2">
              <img
                src={Photo}
                alt="hero-img"
                className="w-[220px] h-[230px] rounded-full"
              />
            </div>
            <h1 className="text-violet-300 font-semibold text-3xl  flex justify-center mt-3">
              Hi, I'm Kapil 👋🏽
            </h1>
            <p className="text-white flex text-center justify-center text-4xl font-medium bg-red-400 lg:mx-96 p-2 mt-12">
              Fullstack Developer based in India
            </p>
            <p className="text-violet-400 text-2xl hover:text-pink-600 flex items-center justify-center  lg:text-center lg:px-96 px-4 py-6">
              I'm Kapil, a fullstack developer with the goal of advancing my
              career and participating in inspiring projects. Here I present my
              work and my passion for web development. Let's shape digital
              solutions together and shape the future!
            </p>

            <div className="">
              <div className="lg:flex lg:flex-row justify-center flex-col lg:space-x-4 px-12 lg:space-y-0 space-y-5 lg:py-4">
                <a
                  href="/contact"
                  className="flex bg-red-400 p-4 lg:gap-x-4 gap-x-12 hover:-translate-y-1 transition-all hover:bg-blue-300 drop-shadow-2xl font-bold text-sm lg:px-2 lg:py-3"
                >
                  <GoMail className="text-2xl" />
                  <p className="text-[20px]">Contact Me</p>
                </a>
                <a
                  href="https://github.com/kapilch15"
                  target="_blank"
                  className="flex bg-gray-900 p-4 lg:gap-x-4 gap-x-12 hover:-translate-y-1 hover:bg-blue-300 duration-200 text-gray-200 font-bold text-sm lg:px-2 lg:py-3"
                >
                  <VscGithub className="text-2xl" />
                  <p className="text-[20px]"> My Projects</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="flex justify-center mx-auto bg-black p-48 mt-12 max-lg:p-20 -rotate-3 w-11/12">
        <div>
          <h2 className="text-white lg:text-6xl md:text-4xl font-medium">
            "It's not at all important to get it right the first time. It's
            vitally important to get it right the last time."
          </h2>
        </div>
      </section>

      {/* SKILLS CONtainer */}
      <div className="bg-pink-100 flex justify-center items-center mt-12">
        {<Skill />}
      </div>
    </>
  );
};

export default Header;
