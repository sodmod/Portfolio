import React from "react";
import styles from "./projectdetails.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";

function ProjectDetails() {
  const details = useRouteLoaderData("details");
  console.log(details);

  return (
    <section className={`${styles.projects}`}>
      <div className="min-h-[100vh] pt-32">
        {details && (
          <div className="w-full sm:w-10/12 m-auto">
            <div className="text-center pb-6 pt-3 text-[23px] leading-[23px] font-bold">
              <h1>About this project</h1>
            </div>
            <div className="w-full">
              <img
                className="w-full sm:object-fill object-scale-down md:max-h-[540px] shadow-2xl rounded-md"
                src={details.images}
                alt=""
              />
              <p className="text-[20px] sm:px-4 leading-10 pt-6">
                {details.message}
              </p>
              <div className="py-3">
                <h1 className="text-center text-[2rem] leading-[23px] font-bold">
                  Technical Skills
                </h1>
                {details.technologies && (
                  <div className="grid grid-cols-2 w-full text-xl sm:w-3/5 gap-5 px-4 m-auto py-6">
                    {details.technologies.map((prop) => (
                      <>
                        <li>{prop.language && prop.language}</li>
                        <li>{prop.language && prop.framework}</li>
                      </>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full pt-3 flex pb-4">
                <Link
                  className="bg-[#7699a9] w-[80%] px-2 py-1 sm:w-[20%] sm:px-4 sm:py-2 text-center block m-auto rounded-md text-white text-[20px] leading-[23px]"
                  to={details.git}
                >
                  Visit Site
                </Link>
                <Link
                  className="bg-[#43494e] w-[80%] px-2 py-1 sm:w-[20%] sm:px-4 sm:py-2 text-center block m-auto rounded-md text-white text-[20px] leading-[23px]"
                  to={details.github_repo.backend}
                >
                  Interface Repository
                </Link>
                {details.github_repo.backend && (
                  <Link
                    className="bg-[#000000] w-[80%] px-2 py-1 sm:w-[20%] sm:px-4 sm:py-2 text-center block m-auto rounded-md text-white text-[20px] leading-[23px]"
                    to={details.github_repo.backend}
                  >
                    Backend Repo
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;
