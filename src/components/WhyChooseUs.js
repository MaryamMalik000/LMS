import React, { useState, useEffect } from "react";
import "../css/style.css";
import image1 from "../images/image2.png";
import image2 from "../images/image1.png";

const WhyChooseUs = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 2000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="why-choose-us"style={{height:'150'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why-choose-us-content">
              <h2>Why Choose Us?</h2>
              <p>
                We are committed to providing high-quality e-learning courses
                that empower individuals to learn at their own pace and achieve
                their goals. Our mission is to make education accessible,
                affordable, and enjoyable for everyone.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="why-choose-us-image">
              <img src={currentImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
