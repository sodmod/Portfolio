import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

function PortfolioPage() {
  const { details } = useRouteLoaderData("portfolio");
  console.log(details);
  return (
    <section className="max-w-[100vw] min-h-full py-4">
      <div className="pt-36 w-full h-auto">
        <h1 className="text-center text-3xl font-bold">
          Welcome To My Portfolio
        </h1>
        {details.map((prop) => (
          <div key={prop.id} className="w-[100%] h-full flex flex-col py-4">
            <div className="text-center w-[50%] m-auto">
              <h1 className="text-xl sm:text-2xl font-bold">{prop.title}</h1>
              <p className="text-lg font-normal p-4">{prop.message}</p>
            </div>
            <Link
              className="sm:w-[70%] sm:max-w-[70%] h-auto mx-auto w-full max-w-full"
              to={`/portfolios/${prop.id}`}
            >
              <img className="w-full m-auto" src={prop.images} alt="" />
            </Link>
          </div>
        ))}
        <div className="text-center py-3">
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
    </section>
  );
}

export default PortfolioPage;
