// src/Components/Skills.jsx
import React from "react";

// Importing icons
// import C from "../assets/c.png";
// import Cpp from "../assets/c-sharp.png";
// import HTML from "../assets/html-5.png";
// import CSS from "../assets/css-3.png";
// import JS from "../assets/js.png";
// import ReactLogo from "../assets/react.svg";
// import Node from "../assets/nodejs.png";
// import Mongo from "../assets/Express.png";
// import Express from "../assets/Express.png";
// import Tailwind from "../assets/tailwind.png";
// import GitHub from "../assets/github.png";

// const SkillIcon = ({ src, alt }) => (
//   <div className="transform transition-transform hover:rotate-6 hover:scale-110 hover:shadow-xl p-3 bg-[#1e293b] rounded-xl shadow-md">
//     <img src={src} alt={alt} className="w-14 h-14 object-contain" />
//   </div>
// );

// const Skills = () => {
//   return (
//     <section id="skills" className="py-16 px-4 bg-background text-foreground">
//       <h2 className="text-4xl font-bold text-center mb-12 font-sans gradient-text">
//         My Tech Stack
//       </h2>

//       {/* LANGUAGES */}
//       <div className="mb-10 ">
//         <h3 className="text-2xl font-semibold mb-4 flex justify-center">Languages</h3>
//         <div className="flex flex-wrap gap-6 justify-center">
//           <SkillIcon src={C} alt="C" />
//           <SkillIcon src={Cpp} alt="C++" />
//           <SkillIcon src={HTML} alt="HTML" />
//           <SkillIcon src={CSS} alt="CSS" />
//           <SkillIcon src={JS} alt="JavaScript" />
//         </div>
//       </div>

//       {/* FRAMEWORKS & LIBRARIES */}
//       <div className="mb-10">
//         <h3 className="text-2xl font-semibold mb-4 flex justify-center">Frameworks & Libraries</h3>
//         <div className="flex flex-wrap gap-6 justify-center">
//           <SkillIcon src={ReactLogo} alt="React" />
//           <SkillIcon src={Tailwind} alt="Tailwind CSS" />
//           <SkillIcon src={Node} alt="Node.js" />
//           <SkillIcon src={Express} alt="Express.js" />
//         </div>
//       </div>

//       {/* TOOLS */}
//       <div>
//         <h3 className="text-2xl font-semibold mb-4 flex justify-center">Tools</h3>
//         <div className="flex flex-wrap gap-6 justify-center">
//           <SkillIcon src={GitHub} alt="GitHub" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import C from "../assets/c.png";
import Cpp from "../assets/c-sharp.png";
import HTML from "../assets/html-5.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import ReactLogo from "../assets/react.svg";
import Node from "../assets/nodejs.png";
import Mongo from "../assets/Express.png";
import Express from "../assets/Express.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillIcon = ({ src, alt }) => (
  <div
    className="transform transition-transform hover:rotate-6 hover:scale-110 hover:shadow-xl p-4 bg-[#1e293b] rounded-xl shadow-md"
    data-aos="zoom-in"
  >
    <img src={src} alt={alt} className="w-14 h-14 object-contain" />
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-4 bg-background text-foreground"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 font-sans gradient-text"
        data-aos="fade-up"
      >
        My Tech Stack
      </h2>

      {/* LANGUAGES */}
      <div className="mb-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Languages
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <SkillIcon src={C} alt="C" />
          <SkillIcon src={Cpp} alt="C++" />
          <SkillIcon src={HTML} alt="HTML" />
          <SkillIcon src={CSS} alt="CSS" />
          <SkillIcon src={JS} alt="JavaScript" />
        </div>
      </div>

      {/* FRAMEWORKS & LIBRARIES */}
      <div className="mb-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Frameworks & Libraries
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <SkillIcon src={ReactLogo} alt="React" />
          <SkillIcon src={Tailwind} alt="Tailwind CSS" />
          <SkillIcon src={Node} alt="Node.js" />
          <SkillIcon src={Express} alt="Express.js" />
        </div>
      </div>

      {/* TOOLS */}
      <div data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">Tools</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <SkillIcon src={GitHub} alt="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
