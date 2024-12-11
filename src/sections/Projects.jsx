import { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = myProjects[projectIndex];
  const projectsSize = myProjects.length;

  const handleNavigation = (direction) => {
    setProjectIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? projectsSize - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectsSize - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Work</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5 w-full">
        <div
          className="flex relative
     flex-col gap-5 px-5 py-10 sm:p-10 shadow-2xl shadow-black-200"
        >
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-2xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo1"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Check Live Site</p>
              <img
                src="assets/arrow-up.png"
                alt="arrow-up"
                className="w-3 h-3"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation("left");
              }}
            >
              <img
                src="assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation("right");
              }}
            >
              <img
                src="assets/right-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={CanvasLoader}>
                <group scale={2} position={[-0.3, -3, 0]} rotation={[0, 0, 0]}>
                  <DemoComputer textures={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;