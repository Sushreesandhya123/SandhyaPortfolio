import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  const resumeLink = "https://drive.google.com/file/d/1ssA7EN4fQbbD-vCzGaEazhCFfJ11V6kN/preview";
  const githubLink = "https://github.com/Sushreesandhya123"; // GitHub link

  return (
    <div className="text-white flex w-full justify-between items-start p-4 md:p-20">
      <div className="md:w-2/4 md:pt-0">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight md:pt-5">
          I am a{" "}
          <span className="text-purple-500 font-bold">
            Software Developer
          </span>
        </p>

        <p className="text-sm md:text-2xl tracking-tight md:pt-5">
          Passionate Software Developer with expertise in web development using React.js and deployment tools like Vite and GitHub. Proficient in C, Python, JavaScript, MySQL, HTML, CSS, Bootstrap, and React. Skilled in creating efficient solutions and improving user experience. Enjoys working in fast-paced environments, combining creativity and problem-solving to drive functionality and innovation.
        </p>
        <div className="flex gap-4 mt-5 md:mt-10">
          <a href="#Footer">
            <button className="text-white py-3 px-6 text-lg md:text-xl md:py-4 md:px-8 w-48 mb-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </a>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-3 px-6 text-lg md:text-xl md:py-4 md:px-8 w-48 mb-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Resume
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-3 px-6 text-lg md:text-xl md:py-4 md:px-8 w-48 mb-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              GitHub
            </button>
          </a>
        </div>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
