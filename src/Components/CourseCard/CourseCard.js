import React from "react";
import "./CourseCard.css";
function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h2 className="course-title">{course.title}</h2>
      <p className="course-instructor">Eğitmen: {course.instructor}</p>
      <p className="course-description">{course.description}</p>
      <div className="course-tags">
        {course.tags.map((tag, index) => (
          <span key={index} className="course-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="course-footer">
        <span className="course-duration">Başlangıç: {course.duration}</span>
        <span className="course-status">{course.status}</span>
      </div>
    </div>
  );
}

export default CourseCard;
