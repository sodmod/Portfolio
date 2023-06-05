import React from "react";
import Typed from "react-typed";
import pics from "../assests/pics.png";
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <section
      className={`${styles.home} "w-[100%] h-[100vh] py-1 flex flex-col-reverse sm:flex-row items-center sm:py-7"`}
    >
      <div className="w-full sm:w-[70%] text-center sm:text-start font-[Arial] not-italic">
        <div className="w-full flex">
          <div className=" sm:w-[100%] flex flex-col md:p-5 xl:p-24">
            <div className="">
              Hello{" "}
              <span className="" role="img" aria-labelledby="">
                👋
              </span>
              , I am
            </div>
            <div className="font-bold text-4xl">Badmus Sodiq Olusola</div>
            <div className="font-bold text-3xl">
              <p>
                A Web Developer Specializing in{" "}
                <Typed
                  strings={[
                    "HTML5",
                    "JavaScript",
                    "MySQL",
                    "PHP",
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
              {/* <span className=""> HTML 5</span> */}
            </div>
            <div className="max-w-md text-lg">
              A web developer with 3 years of experience, adept at collaborating
              with dynamic teams to build high quality websites and identify
              opportunities to enhance the user experience.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[30%] md:block">
        <img className="w-[100%]" src={pics} alt="" />
      </div>
    </section>
  );
}

export default HomePage;
