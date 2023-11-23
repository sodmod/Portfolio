import React from "react";
import Typed from "react-typed";
import pics from "../assests/badmus.png";
import styles from "./homepage.module.css";
import PageTransition from "./PageTransition";
import AboutMePage from "./AboutMePage";
import ServicePage from "./ServicePage";

function HomePage() {
  return (
    <PageTransition
      className={`${styles.home} "w-[100%] min-h-[100vh] py-1 sm:flex-row items-center sm:py-7"`}
    >
      <div className="sm:w-3/4 min-h-[500px] mx-auto text-center grid grid-cols-2 sm:text-start font-[Arial]">
        <div className="w-full text-center">
          <div className="sm:w-[100%] md:p-5">
            <div className="text-2xl">
              Hello{" "}
              <span className="" role="img" aria-labelledby="">
                👋
              </span>
              , I am
            </div>
            <div className="font-bold text-4xl">Badmus Sodiq Olusola.</div>
            <div className="font-bold text-3xl">
              <p>
                I am a Fullstack Developer Specializing in{" "}
                <Typed
                  strings={[
                    "HTML5",
                    "JavaScript",
                    "MySQL",
                    "SpringBoot",
                    "Java",
                    "Front-end development",
                  ]}
                  loop
                  showCursor={false}
                  typeSpeed={120}
                  backSpeed={140}
                  backDelay={100}
                  shuffle={true}
                />
              </p>
            </div>
            <div className="max-w-xl text-xl text-center mx-auto mt-2">
              A fullstack with 3 years of experience, adapt{" "}
              <input type="button" value="" /> collaborating with dynamic teams
              to build high quality websites and identify opportunities to
              enhance the user experience.
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[70%] md:block flex justify-end">
          <img className="rounded-full border-gray-50" src={pics} alt="" />
        </div>
      </div>
      <AboutMePage />
      <ServicePage />
    </PageTransition>
  );
}

export default HomePage;
