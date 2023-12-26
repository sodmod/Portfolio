import { Component } from "react";
import "./WelcomeStyle.css";

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
          <div></div>
        </div>
        {/* <div className={`w-full h-full max-w-full`}>
          <div
            className={`${""} w-4/5 h-4/6 rounded-xl p-1 flex justify-center items-center flex-col mx-auto`}
          >
            <div className={`${"wel"} w-full flex items-center gap-x-5`}>
              <h1 className="w-1/2 text-9xl text-center">Developer</h1>
              <div className="w-1/2 relative">
                <img
                  className="w-full h-28 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-x-5">
              <div className="w-1/2 relative">
                <img
                  className="w-full h-28 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <h1 className="w-1/2 text-9xl text-center">Portfolio</h1>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default WelcomePage;
