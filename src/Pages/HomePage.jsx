import React from "react";
import Typed from "react-typed";
import pics from "../assests/badmus.png";
import styles from "./homepage.module.css";
import PageTransition from "./PageTransition";

function HomePage() {
  return (
    <PageTransition
      className={`${styles.home} "w-[100%] min-h-[100vh] py-1 sm:flex-row items-center sm:py-7"`}
    >
      <div className="w-full min-h-[500px] text-center sm:text-start font-[Arial] not-italic">
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
              {/* <span className=""> HTML 5</span> */}
            </div>
            <div className="max-w-xl text-xl text-center mx-auto mt-2">
              A fullstack with 3 years of experience, adapt{" "}
              <input type="button" value="" /> collaborating with dynamic teams
              to build high quality websites and identify opportunities to
              enhance the user experience.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[100%] w-[inherit]">
          <div className="h-[inherit] w-full max-w-full text-center text-7xl">
            <h1
              className="font-bold"
              style={{
                color: "rgba(255, 255, 255, 0.792)",
                textUnderlinePosition: "under",
                textDecoration: "underline",
              }}
            >
              Services
            </h1>
          </div>
        </div>

        <div className=" w-ful max-w-full text-black">
          <div className="grid md:grid-cols-3 mx-auto gap-14 w-10/12 py-10 text-xl">
            <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-2xl rounded-lg hover:scale-95 duration-300 text-center">
              <h1>Front-end Development</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corrupti, sapiente, dolorem optio praesentium expedita explicabo
                commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum
                nam fuga nostrum excepturi quaerat corporis?
              </p>
            </div>
            <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
              <h1>Back-End Development</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corrupti, sapiente, dolorem optio praesentium expedita explicabo
                commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum
                nam fuga nostrum excepturi quaerat corporis?
              </p>
            </div>
            <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
              <h1>Database Administration</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corrupti, sapiente, dolorem optio praesentium expedita explicabo
                commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum
                nam fuga nostrum excepturi quaerat corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full sm:w-[40%] md:block">
        <img className="w-[100%] p-4" src={pics} alt="" />
      </div> */}
    </PageTransition>
  );
}

export default HomePage;
