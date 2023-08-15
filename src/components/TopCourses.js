import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/course.css";
import { FaUsers, FaCommentAlt, FaCartPlus, FaStar,FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import course1Image from "../images/web (2).jpg";
import course2Image from "../images/datascience.jpg";
import course3Image from "../images/graphic.jpg";
import course4Image from "../images/mobileapp.jpg";
import course5Image from "../images/python.jpg";
import course6Image from "../images/digital.jpg";
import course7Image from "../images/uiux.jpg";
import course8Image from "../images/java.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopCourses = () => {
  
    const courses = [
        {
          id: 1,
          title: "Web Development Bootcamp",
          image: course1Image,
          rating: 4.8,
          price: "$99",
          enrolled: 2500,
          comments: 580,
          keypoints: "Learn HTML, CSS, JavaScript, React, and more.",
        },
        {
          id: 2,
          title: "Data Science Masterclass",
          image: course2Image,
          rating: 4.5,
          price: "$129",
          enrolled: 1800,
          comments: 420,
          keypoints: "Explore data analysis, machine learning, and Python.",
        },
        {
          id: 3,
          title: "Graphic Design Essentials",
          image: course3Image,
          rating: 4.2,
          price: "$79",
          enrolled: 1200,
          comments: 300,
          keypoints: "Learn Adobe Photoshop, Illustrator, and more.",
        },
        {
          id: 4,
          title: "Mobile App Development",
          image: course4Image,
          rating: 4.7,
          price: "$89",
          enrolled: 2200,
          comments: 480,
          keypoints: "Create iOS and Android apps with React Native.",
        },
        {
          id: 5,
          title: "Python for Beginners",
          image: course5Image,
          rating: 4.9,
          price: "$69",
          enrolled: 3200,
          comments: 700,
          keypoints: "Introduction to Python programming.",
        },
        {
          id: 6,
          title: "Digital Marketing Fundamentals",
          image: course6Image,
          rating: 4.6,
          price: "$59",
          enrolled: 2900,
          comments: 620,
          keypoints: "Master social media, SEO, and online advertising.",
        },
        {
          id: 7,
          title: "UX/UI Design",
          image: course7Image,
          rating: 4.4,
          price: "$89",
          enrolled: 1700,
          comments: 400,
          keypoints: "Create user-friendly interfaces and user experiences.",
        },
        {
          id: 8,
          title: "Java Programming",
          image: course8Image,
          rating: 4.3,
          price: "$79",
          enrolled: 2600,
          comments: 540,
          keypoints: "Learn Java fundamentals and object-oriented programming.",
        },
        
      ];
      
      const generateStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating - filledStars >= 0.25;
        const stars = [];
    
        for (let i = 1; i <= totalStars; i++) {
          if (i <= filledStars) {
            stars.push(<FaStar key={`filled-${i}`} className="star filled" />);
          } else if (i === filledStars + 1 && hasHalfStar) {
            stars.push(<FaStarHalfAlt key={`half-filled-${i}`} className="star half-filled" />);
          } else {
            stars.push(<FaStar key={`empty-${i}`} className="star" />);
          }
        }
    
        return stars;
      };
    
    
      
  const arrowStyles = {
    fontSize: '24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  };
 
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="slick-prev" style={arrowStyles}>&#10094;</div>,
    nextArrow: <div className="slick-next" style={arrowStyles}>&#10095;</div>,
    responsive: [
        {
          breakpoint: 992, // Medium screen breakpoint
          settings: {
            slidesToShow: 2, // Show 2 cards in a row on medium screens
          },
        },
        {
          breakpoint: 768, // Small screen breakpoint
          settings: {
            slidesToShow: 1, // Show 1 card in a row on small screens
          },
        },
      ],
  };
  return (
    <section className="top-courses" >
      <div className="container"  style={{ height: '420px' }}>
        <h2>Our Top Courses</h2>
      
        <div className="row">
        <div>
        <Slider {...settings}>
          {courses.map((course) => (
            <div className="col-md-12" key={course.id}>
              <div className="course-card">
           
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-hover">
                    <h4>{course.title}</h4>
                    <p>{course.keypoints}</p>
                    <FaCartPlus className="add-to-cart-icon" />
                  </div>
                </div>
                <div className="course-details">
                  <h4>{course.title}</h4>
                  <div className="course-info">
                  <span className="course-rating">
                        {generateStars(course.rating)}
                      </span>
                    <span className="course-price">{course.price}</span>
                  </div>
                  <hr/>
                  <div className="course-icons">
                    <div className="enrolled">
                      <FaUsers />
                      <span>{course.enrolled}</span>
                    </div>
                    <div className="comments">
                      <FaCommentAlt />
                      <span>{course.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
