import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, sethasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("danishcse091@gmail.com");
    sethasCopied(true);
    setTimeout(() => {
      sethasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi,I&apos;m Danish</p>
              <p className="grid-subtext">
                With 1.5 years of experience in software development
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React and
                ReactNative ecosystem .
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full h-fit sm:h-[326px] flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                animateIn
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones .
              </p>
              <p className="grid-subtext">
                I&apos;m based in India, with remote work available.
              </p>
              <Button label="Contact me" isBeam containerClass="w-full mt-10" href="#contact"/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full h-fit sm:h-[366px] object-contain"
            />
            <div>
              <p className="grid-headtext">My Passsion for coding</p>
              <p className="grid-subtext">
                Coding is not just a skill for me; it&apos;s a journey of discovery
                and growth. I thrive on solving intricate challenges and turning
                ideas into reality through innovative solutions. Exploring new
                technologies and staying updated with the latest trends in
                programming constantly pushes me to expand my boundaries. For
                me, coding is a medium to create, innovate, and leave a
                meaningful impact on the world.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[276px] sm:h-[276px] h-full object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
