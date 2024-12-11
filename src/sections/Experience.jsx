/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";
const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={5} />
              <spotLight position={[10, 10, 10]} penumbra={1} angle={0.15} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="py-5  px-2.5 sm:py-10 sm:px-5 ">
              {workExperiences.map(
                ({ name, duration, pos, animation, title, id, icon }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")} 
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="icon" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
