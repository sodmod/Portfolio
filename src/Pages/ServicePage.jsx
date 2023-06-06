import React from "react";
import pics from "../assests/serviceNav.png";

// const sod = [
//   {
//     id: "1",
//     mes: (
//       <div className="bg-[#D9D9D9] w-full my-4 p-4 shadow-xl rounded-lg hover:scale-95 duration-300">
//         <h1>Front-end Development</h1>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
//           corrupti, sapiente, dolorem optio praesentium expedita explicabo
//           commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
//           fuga nostrum excepturi quaerat corporis?
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: "2",
//     mes: (
//       <div className="bg-[#D9D9D9] w-full my-4 p-4 shadow-xl rounded-lg hover:scale-95 duration-300">
//         <h1>Front-end Development</h1>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
//           corrupti, sapiente, dolorem optio praesentium expedita explicabo
//           commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
//           fuga nostrum excepturi quaerat corporis?
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: "3",
//     mes: (
//       <div className="bg-[#D9D9D9] w-full my-4 p-4 shadow-xl rounded-lg hover:scale-95 duration-300">
//         <h1>Front-end Development</h1>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
//           corrupti, sapiente, dolorem optio praesentium expedita explicabo
//           commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
//           fuga nostrum excepturi quaerat corporis?
//         </p>
//       </div>
//     ),
//   },
// ];

function ServicePage() {
  return (
    <section className="min-h-[100vh] h-[100vh] w-[100vw]">
      <div className="h-[50vh] w-full">
        <div className="h-[100%] w-[inherit]">
          <div
            className="h-[inherit] w-full max-w-full flex mx-auto justify-center items-center text-7xl"
            style={{
              backgroundImage: `url(${pics})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1
              className="font-bold"
              style={{
                textUnderlinePosition: "under",
                textDecoration: "underline",
              }}
            >
              Services
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full max-w-full px-4 py-6">
        <div className="grid md:grid-cols-3 mx-auto gap-14 h-full w-10/12 py-10 text-xl">
          <div className="bg-[#D9D9D9] w-full h-max my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Front-end Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-max my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Front-end Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-max my-4 md:p-0 xl:p-11 shadow-xl rounded-lg hover:scale-95 duration-300 text-center">
            <h1>Front-end Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              corrupti, sapiente, dolorem optio praesentium expedita explicabo
              commodi nostrum, voluptas minima odio. Nisi doloribus, dolorum nam
              fuga nostrum excepturi quaerat corporis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;