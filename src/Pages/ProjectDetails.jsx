import React from "react";
import styles from "./projectdetails.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";

function ProjectDetails() {
  const details = useRouteLoaderData("details");
  console.log(details);

  return (
    <section className={`${styles.projects}`}>
      <div className="min-h-[100vh] mt-32">
        <div className="w-full sm:w-10/12 m-auto">
          <div className="text-center pb-6 pt-3 text-[23px] leading-[23px] font-bold">
            <h1>About this project</h1>
          </div>
          <div className="w-full">
            <img
              className="w-full sm:object-fill object-scale-down md:max-h-[350px] shadow-2xl rounded-md"
              src={details.images}
              alt=""
            />
            <p className="text-[20px] md:px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sint optio dolor? Quae assumenda rerum eius nemo aliquam, enim
              iusto tempore officiis, natus quas sapiente! Eius officia incidunt
              magnam accusantium? Adipisci nostrum eveniet eaque hic fugiat.
              Nesciunt magni nam accusamus corporis ea nostrum necessitatibus,
              asperiores ipsum quod, cupiditate, consectetur minus veritatis eos
              dicta officiis ut nobis inventore molestias labore molestiae!
              Molestias quos recusandae quia voluptatum rerum ipsum natus
              quibusdam numquam eius placeat, similique reiciendis, aliquam
              provident quas omnis sunt. Fugit sunt culpa sed accusamus
              recusandae voluptas corrupti eos voluptates impedit.
            </p>
            <div>
              <h1 className="text-center text-[20px] leading-[23px] font-bold">
                Technical Skills
              </h1>
              <div className="grid grid-cols-2 w-full sm:w-3/5 gap-5 px-4">
                <li>React</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>Co</li>
                <li>Ok</li>
                <li>Jaava</li>
              </div>
            </div>
            <div className="w-full pt-3">
              <Link
                className="bg-[#216D8F] w-[80%] px-2 py-1 sm:w-[20%] sm:px-4 sm:py-2 text-center block m-auto rounded-md text-white text-[20px] leading-[23px]"
                to=""
              >
                Visit Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
