import React from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import "../css/carousel.css";

export default function Carousal() {
  return (
    <div className="containers">
      <div style={{ paddingTop: "10px" }}>
      
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ maxHeight: "530px" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-item active">
              <img
                src={banner2}
                className="d-block w-100"
                style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }}
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="carousel-heading">Learn From Anywhere</h1>
                <p className="carousel-text">
                  Technology is bringing a massive wave of evolution on learning things in different ways.
                </p>
                <button className="carousel-button">Get Started</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://static.wixstatic.com/media/5bfb6f_7b8f36c4c4b747158f956861fb522137~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1349,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_7b8f36c4c4b747158f956861fb522137~mv2_d_6000_4000_s_4_2.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }}
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="carousel-heading">Discover New Subjects</h1>
                <p className="carousel-text">
                  Explore a wide range of subjects and expand your knowledge.
                </p>
                <button className="carousel-button">Get Started</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={banner1}
                className="d-block w-100"
                style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }}
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="carousel-heading">Start Your Journey</h1>
                <p className="carousel-text">
                  Embark on a learning journey and unlock endless possibilities.
                </p>
                <button className="round-button">Get Started</button>

              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
