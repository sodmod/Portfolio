import React from "react";
import pics from "../assests/me2.jpg";
import PageTransition from "./PageTransition";

function AboutMePage() {
  return (
    <PageTransition className="relative w-full min-h-[100vh] max-w-full">
      <div className="flex flex-row  min-h-[100%] wax-w-full">
        <div className="bg-[#788ba0c4] w-full font-[Arial] not-italic sm:w-3/6 min-h-[inherit] md:text-xl">
          <div className="w-full min-h-[inherit] overflow-hidden pt-32">
            <div className="w-[100%]  sm:w-[80%] lg:mx-auto text-white pt-16 pl-2">
              <h3 className="text-lg font-normal">Full-Stack Developer</h3>
              <h1 className="uppercase font-bold text-4xl">Sodiq Badmus</h1>
              <p>
                Current student looking to join the workforce to gain real-world
                experience. Ability to complete tasks on time in both individual
                and team settings. Dependable and reliable, ready to learn and
                grow with your company and I am an adaptable student with
                knowledge of application development, configuration management,
                and database design. Aiming to leverage my abilities to
                successfully fill the vacancy on your team. Frequently praised
                for communication by my peers, I can be relied upon to help your
                team achieve its goals. Seeking to utilize excellent
                communication, interpersonal, and organizational skills to
                complete tasks. Reliable with a good work ethic and the ability
                to quickly adapt to new tasks and environments.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:pt-32 sm:block w-3/6 relative mx-auto">
          <div className="relative sm:w-[100%] h-[100%] pt-5 pl-5 mx-auto">
            <img
              className={`${"sm:w-[100%] h-[70%] pb-6"}`}
              style={{ objectFit: "contain" }}
              src={pics}
              alt=""
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutMePage;
