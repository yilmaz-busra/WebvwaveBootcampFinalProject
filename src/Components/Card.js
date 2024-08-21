import React from "react";
import "./card.css";

function Card({ title, preinformation, date, buttonText, image }) {
  return (
    <div className="course-card">
      <div className="card-header">
        <img src={`/${image}`} alt="workshop" />
        <h3>{title}</h3>
        <p>{preinformation}</p>
      </div>
      <div className="card-footer">
        <span>Son Başvuru: {date}</span>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
