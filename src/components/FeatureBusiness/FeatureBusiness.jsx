import React from "react";
import "./FeatureBusiness.scss";

const FeatureBusiness = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="left-info">
          <h2>
            <span>fieverr</span> business.
          </h2>
          <h1>
            A business solution <br />
            designed for <i>teams</i>
          </h1>
          <h3>
            Upgrade to a curated experience packed with tools <br /> and
            benefits, dedicated to businesses
          </h3>
          <div className="advantages">
            <div className="advantage">
              <img src="./img/check.png" alt="" />
              <p>Connect to freelancers with proven business experience</p>
            </div>
            <div className="advantage">
              <img src="./img/check.png" alt="" />
              <p>
                Get matched with the perfect talent by a customer success
                manager
              </p>
            </div>
            <div className="advantage">
              <img src="./img/check.png" alt="" />
              <p>
                Manage teamwork and boost productivity with one powerful
                workspace
              </p>
            </div>
          </div>

          <button>Explore Fieverr Business</button>
        </div>

        <div className="right-img">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt="people-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBusiness;
