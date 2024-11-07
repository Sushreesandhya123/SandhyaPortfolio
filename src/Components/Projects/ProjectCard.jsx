import React from "react";

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
      <h1 className="text-center font-bold text-2xl text-white py-3">{title}</h1>
      <div className="image">
        <img src={image} alt={title} className="w-[80%] mx-auto py-3 rounded-lg" />
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mx-auto">
        <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
          Project Link
        </button>
      </a>
      <p className="text-gray-400 font-semibold py-2 px-5 text-center">
        <span className="font-bold text-xl block text-left text-white">Desc:</span>
        {description}
      </p>
      <p className="text-gray-400 font-semibold py-2 px-5">
        <span className="font-bold text-xl block text-left text-white">Technology used:</span>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default ProjectCard;
