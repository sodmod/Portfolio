import React from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom";

function PortfolioPage({ props, images }) {
  const { details } = useRouteLoaderData("portfolio");

  return (
    <section className="w-full max-w-full min-h-full px-1 sm:px-4 py-4">
      <div className="pt-36 w-full h-auto">
        <h1 className="text-center text-3xl font-bold">
          Welcome To My Portfolio
        </h1>
        {details.map((prop) => (
          <div key={prop.id} className="py-4">
            <h1 className="text-xl sm:text-2xl font-bold">{prop.title}</h1>
            <p className="text-base font-normal">{prop.message}</p>
            <NavLink className="w-full h-60">
              <img className="w-fulld" src={prop.images} alt="" />
            </NavLink>
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
