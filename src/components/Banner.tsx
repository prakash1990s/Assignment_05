

import "./Banner.css";
import logo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">

        <div className="banner-text">
      

          <h1>
            Build Your Ideal
            <br />
            <span>Development Stack</span>
          </h1>
          
          <br/>

          <p className="description">
            Explore frontend, backend, database and tooling options.
            Compare them side by side and put together the Stack
            that fits your <br/> next project.
          </p>

          <div className="banner-buttons">
            <button className="primary-btn">
              Explore Technologies
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="banner-image">
          <img src={logo} alt="DevStack" />
        </div>

      </div>
    </section>
  );
};

export default Banner;