import React from "react";
import PageTransition from "./PageTransition";

function ServicePage() {
  return (
    <div>
      <div className="w-[inherit] mt-10">
        <div className="w-full max-w-full text-center text-5xl">
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
      <div className="w-full max-w-full text-black mt-7">
        <div className="grid md:grid-cols-3 mx-auto gap-14 w-10/12 py-10 text-xl">
          <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-2xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Front-end Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Back-End Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Database Administration</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
