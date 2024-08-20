import React from "react";

function Card({ title, date, description }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
      <button>Bekleyen</button>
    </div>
  );
}

export default Card;
