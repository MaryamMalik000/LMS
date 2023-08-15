import React from "react";
import '../css/teacher.css'
import { FaStar,FaStarHalfAlt} from "react-icons/fa";
import Image1 from "../images/t1.jpg";
import Image2 from "../images/t2.jpg";
import Image3 from "../images/t3.jpg";
const TeacherCard = () => {
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      expertise: "Web Development",
      courses: ["HTML", "CSS", "JavaScript", "React"],
      rating: 5,
      profileImage: Image1,
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Data Science",
      courses: ["Python", "Data Analysis", "Machine Learning"],
      rating: 4.9,
      profileImage: Image2,
    },
    {
        id: 3,
        name: "Robert Johnson",
        expertise: "UX/UI Design",
        courses: ["UI Design Principles", "Prototyping", "User Research"],
        rating: 4.5,
        profileImage: Image3,
      },
    // Add more teachers here
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



  return (
    <div>
      <h2>Our Expert Teachers</h2>
      <div className="teacher-card-container">
        {teachers.map((teacher) => (
          <div className="teacher-card" key={teacher.id}>
            <div className="profile-image">
              <img src={teacher.profileImage} alt={teacher.name} />
            </div>
            <div className="teacher-details">
              <h3>{teacher.name}</h3>
              <p>{teacher.expertise}</p>
              <div className="courses">
                <p>Courses: {teacher.courses.join(", ")}</p>
              </div>
              <div className="rating">{generateStars(teacher.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCard;
