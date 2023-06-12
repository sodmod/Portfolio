import React from "react";
import pics from "../assests/pics.png";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, voluptates quam, beatae unde rem magnam nisi
                numquam velit itaque, sapiente quo tenetur. Rem tenetur
                blanditiis officiis inventore culpa facilis distinctio! Aut
                molestiae voluptate aperiam natus dolorum, debitis et. Deleniti
                quidem, facere neque tempora, sapiente deserunt beatae
                laudantium officia cupiditate ipsa quae numquam aliquam illo
                provident in veniam dolores. Ex, adipisci. Reiciendis assumenda,
                aliquid nemo molestiae est quaerat velit veritatis incidunt
                alias magnam nobis voluptatibus voluptas. Quisquam dicta,
                ducimus quam neque reprehenderit ea facilis mollitia vel
                deserunt illo ex vitae sunt? Animi in non, consequuntur
                excepturi voluptates praesentium veniam inventore facilis ad
                libero autem, perferendis reprehenderit, explicabo quas nemo
                vero illum maiores ducimus laudantium laborum! Tenetur iste
                delectus illo qui aperiam. Dicta, delectus exercitationem. Hic
                amet, mollitia et atque earum labore quia corporis veniam, nisi
                incidunt facere cumque nostrum officia perferendis totam
                perspiciatis? Sed culpa ratione expedita quae aliquam
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
