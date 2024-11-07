import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiMysql, SiPython, SiDjango, SiFastapi, SiC } from "react-icons/si";
import alongxLogo from "../../assets/alongx.webp"; // Adjust the path as needed

const Experience = () => {
  return (
    <div id="Experience" className="p-0 md:p-4 bg-gray-800">
      <h1 className="text-2xl md:text-5xl text-white font-bold text-center mb-8">Experience</h1>
      <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap md:w-2/4 gap-8 md:p-4">
          {[
           { icon: <FaHtml5 color="#E34F26" size={100} />, key: 'html' },
           { icon: <FaCss3 color="#1572B6" size={100} />, key: 'css' },
           { icon: <FaReact color="#61DAFB" size={100} />, key: 'react' },
           { icon: <FaJs color="#F7DF1E" size={100} />, key: 'js' },
           { icon: <FaBootstrap color="#563D7C" size={100} />, key: 'bootstrap' },
           { icon: <SiMysql color="#4479A1" size={100} />, key: 'mysql' },
           { icon: <SiPython color="#3776AB" size={100} />, key: 'python' },
           { icon: <SiDjango color="#092E20" size={100} />, key: 'django' },
           { icon: <SiFastapi color="#009688" size={100} />, key: 'fastapi' },
           { icon: <SiC color="#555555" size={100} />, key: 'c' }
          ].map(skill => (
            <span key={skill.key} className="p-4 bg-gray-900 text-white rounded-xl shadow-md flex items-center justify-center">
              {skill.icon}
            </span>
          ))}
        </div>

        {/* Experience Details */}
        <div className="md:w-2/4 space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={alongxLogo} alt="Alongx Logo" className="w-16 h-16 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-white">Alongx Software Company</h2>
                <h2 className="text-xl font-semibold text-white">Full Stack Python Developer</h2>
                <p className="text-md text-gray-300">1 Year Experience</p>
              </div>
            </div>
            <p className="text-white">Technologies Used:</p>
            <p className="text-white">Python, Django, FastAPI, MySQL, Git, JIRA, WebSocket</p>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Developed and maintained web applications using Python Django.</li>
              <li>Collaborated with front-end developers to integrate user-facing elements with server-side logic.</li>
              <li>Implemented FastAPI for seamless communication between front-end and back-end.</li>
              <li>Worked with MySQL for data storage and retrieval.</li>
              <li>Utilized GitHub for efficient code management and collaboration.</li>
              <li>Engaged in Agile development practices, attending daily stand-ups and sprint planning sessions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
