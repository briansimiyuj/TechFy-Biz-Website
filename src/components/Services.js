import React from "react";
import laptop from "../images/laptop.jpg";
import ecom from "../images/Ecommerce.jpg";
import app from "../images/App.jpg";
import marketing from "../images/marketing.png";
import digital from "../images/digit.png";
import brand from "../images/brand.png";
const Services = () => {
  return (
    <div>
      <div id="our-services">
        <div className="container">
          <div className="service-wrapper">
            <span className="options text-light "> WHAT WE OFFER </span>
            <p className="passion pb-2">OUR PRODUCTS</p>
            <div classname="cards">
              <div class="post-wrapper">
                {/* first row */}

                <div className="row">
                  <div className="post col ">
                    <img className="thumbnail" src={laptop} />
                    <div className="post-preview">
                      <h6 className="post-title"> Web Applications </h6>
                      <p className="post-intro">
                        We create basic and costom web applications based on our
                        clients' intrests.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="post col ">
                    <img className="thumbnail" src={ecom} />
                    <div className="post-preview">
                      <h6 className="post-title">Ecommerce Wesites </h6>
                      <p className="post-intro">
                        We offer ecomerce web application development with
                        checkout capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="post col ">
                    <img className="thumbnail" src={app} />
                    <div className="post-preview">
                      <h6 className="post-title"> Mobile Applications </h6>
                      <p className="post-intro">
                        We will develop mobile and desktop applications that
                        suits your business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="post col  ">
                    <img className="thumbnail" src={marketing} />
                    <div className="post-preview">
                      <h6 className="post-title"> ICT consultant</h6>
                      <p className="post-intro">
                        We offer round the clock support for all our products
                        and services.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="post col  ">
                    <img className="thumbnail" src={digital} />
                    <div className="post-preview">
                      <h6 className="post-title">Digital Marketing </h6>
                      <p className="post-intro">
                        We will now take what we have created and market it on
                        social media and ensure the client’s target market is
                        reached.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="post col   ">
                    <img className="thumbnail" src={brand} />
                    <div className="post-preview">
                      <h6 className="post-title">Branding</h6>
                      <p className="post-intro">
                        We also design logos, company profiles, posters, flyers,
                        brochures, business cards, and letterheads for your
                        company
                      </p>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
