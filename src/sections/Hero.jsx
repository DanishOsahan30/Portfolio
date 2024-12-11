import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HackerRoomCamera from "../components/HackerRoomCamera";
import Button from "../components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 448 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className=" min-h-screen w-full flex flex-col relative text-white" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-03">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi , I am Danish <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">A Software Engineer</p>
      </div>

      <div className="w-full h-full absolute  inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoomCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HackerRoomCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              label="Let's work together"
              isBeam
              containerClass="w-full sm:w-fit  sm:min-w-96 mt-10"
              href='#contact'
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;