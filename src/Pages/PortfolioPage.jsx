import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import PageTransition from "./PageTransition";

function PortfolioPage() {
  const { details } = useRouteLoaderData("portfolio");
  return (
    <PageTransition className="max-w-[100vw] h-full min-h-full py-4">
      {details && (
        <div className="mt-36 w-full h-auto">
          <h1 className="text-center text-3xl font-bold">
            Welcome To My Portfolio
          </h1>
          {details.map((prop) => (
            <div
              key={prop.id}
              className="sm:w-[100%] min-h-full flex flex-col py-8"
            >
              <div className="text-center sm:w-[50%] m-auto w-[90%]">
                <h1 className="text-xl sm:text-2xl font-bold">{prop.title}</h1>
                <p className="sm:text-lg font-normal sm:p-4 text-base">
                  {prop.preview}
                </p>
              </div>
              <Link
                className="sm:w-[70%] sm:max-w-[70%] h-auto mx-auto w-full max-w-full shadow-xl rounded-lg hover:scale-90 duration-300"
                to={`/portfolios/${prop.id}`}
              >
                <img
                  className="p-3 sm:p-0 sm:w-full m-auto"
                  src={prop.images}
                  alt=""
                />
              </Link>
            </div>
          ))}
          <div className="text-center py-3 text-xl text-black">
            <h3>Let's Talk</h3>
            <p>
              Do you want to get in touch or talk about a project? Feel free to
              contact me via email{" "}
              <a href="mailto:badmussodiq123@yahoo.com">
                badmussodiq123@yahoo.com
              </a>
            </p>
          </div>
        </div>
      )}
    </PageTransition>
  );
}

export default PortfolioPage;
