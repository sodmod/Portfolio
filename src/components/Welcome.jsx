import { Component } from "react";
import "./WelcomeStyle.css";
import { Link } from "react-router-dom";

class WelcomePage extends Component {
  render() {
    return (
      <>
        <div className="welcome-container">
          <div className="welcome1">
            <h1>Developer</h1>
            <div className="welcome1-image">
              <img
                src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="welcome2">
            <div className="welcome1-image">
              <img
                src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <h1>Portfolio</h1>
          </div>
          <div className="socials-contianer">
            <div className="socials">
              <ul className="social-list">
                <Link>
                  <i className="fa-solid fa-code-compare" />
                </Link>
                <Link>
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
                <Link>
                  <i className="fa-brands fa-whatsapp" />
                </Link>
                <Link>
                  <i className="fa-regular fa-envelope" />
                </Link>
              </ul>
            </div>
            <div className="details">
              <p>
                I'm a passionate graphic designer with a knack for turning ideas
                into stunning visuals. With a keen eye for detail and a love for
                creativity, I strive to make every project unique and impactful.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomePage;
