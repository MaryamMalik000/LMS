import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import design from "../images/design.jpg";
import intelligence from "../images/intelligence.jpg";
import bussiness from "../images/bussiness.jpg";
import marketing from "../images/marketing.jpg";
import photography from "../images/photography.jpg";
import web from "../images/web.jpg";
const Category = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="heading">
          <h2>Explore Categories</h2>
          <p>Discover our wide range of course categories.</p>
        </div>
        <div className="row">
        <div className="col-md-4">
            <div className="category-item" id="category5">
              <img
                src={marketing}
                alt="Category 5"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Marketing</h3>
                <p>Over 100 courses</p>
              </div>
            </div>
          </div>
        

          {/* Category 2 */}
          <div className="col-md-4">
            <div className="category-item" id="category2">
              <img
                src={bussiness}
                alt="Category 2"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Bussiness</h3>
                <p>Over 100 courses</p>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="col-md-4">
            <div className="category-item" id="category3">
              <img
                src={intelligence}
                alt="Category 3"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Artificial Intelligence</h3>
                <p>Over 200 courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Category 4 */}
          <div className="col-md-4">
            <div className="category-item" id="category4">
              <img
                src={photography}
                alt="Category 4"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Photography</h3>
                <p>Over 140 courses</p>
              </div>
            </div>
          </div>

          {/* Category 5 */}
        
          <div className="col-md-4">
            <div className="category-item" id="category1">
              <img
                src={design}
                alt="Category 1"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Designer</h3>
                <p>Over 200 courses</p>
              </div>
            </div>
          </div>
       
          <div className="col-md-4">
            <div className="category-item" id="category6">
              <img
                src={web}
                alt="Category 6"
                className="img-fluid"
              />
              <div className="category-overlay">
                <h3>Web Development</h3>
                <p>Over 220 courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-more">
        <a href="#">
        View All <FontAwesomeIcon icon={faChevronRight} />
      </a>
        </div>
      </div>
    </section>
  );
};

export default Category;
