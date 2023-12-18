import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Skill = () => {
  return (
    <div>
      <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-8">My Skills</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/*  Skill Card 1*/}
          <div class="bg-white hover:bg-red-200 p-6 rounded-lg shadow-xl hover:shadow-red-400">
            <div>
              <h2 class="text-xl font-bold mb-4">HTML</h2>
              <FaHtml5 className="text-red-600 text-4xl hover:scale-90 duration-200" />
            </div>
            <p class="text-gray-700">
              Proficient in creating structured and semantic web pages using
              HTML5.
            </p>
          </div>
          {/* {/* Skill Card 2*/}
          <div class="bg-white hover:bg-cyan-200 p-6 rounded-lg shadow-xl hover:shadow-cyan-400">
            <h2 class="text-xl font-bold mb-4">CSS</h2>
            <FaCss3Alt className="text-black text-4xl hover:scale-90 duration-200" />
            <p class="text-gray-700">
              Skilled in styling web pages with CSS3, including responsive
              design principles.
            </p>
          </div>
          {/* Skill Card 3 */}
          <div class="bg-white hover:bg-green-200 p-6 rounded-lg shadow-xl hover:shadow-green-400">
            <h2 class="text-xl font-bold mb-4">JavaScript</h2>
            <IoLogoJavascript className="text-4xl hover:scale-90 duration-200 text-yellow-400" />
            <p class="text-gray-700">
              Experience in building interactive and dynamic user interfaces
              using JavaScript.
            </p>
          </div>
          {/* Skill Card 4  */}
          <div class="bg-white hover:bg-yellow-200 p-6 rounded-lg shadow-xl hover:shadow-yellow-400">
            <h2 class="text-xl font-bold mb-4">React</h2>
            <FaReact className="text-4xl text-blue-300 hover:scale-90 duration-200" />
            <p class="text-gray-700">
              Proficient in developing modern web applications using the React
              library.
            </p>
          </div>
          {/* <!-- Add more skill cards as needed --> */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
