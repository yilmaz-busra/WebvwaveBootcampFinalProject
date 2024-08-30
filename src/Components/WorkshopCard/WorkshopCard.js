import React from "react";
import "./WorkshopCard.css";

function WorkshopCard({ title, preinformation, date, buttonText, image }) {
  return (
    <div className="workshop-card">
      <div className="workshop-card-header">
        <img src={`/${image}`} alt="workshop" className="workshop-image" />
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

export default WorkshopCard;
