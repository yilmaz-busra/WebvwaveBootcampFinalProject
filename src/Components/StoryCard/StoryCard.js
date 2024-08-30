import React from "react";
import "./styles.css";

const StoryCard = ({ image, name, title, feedback }) => {
  return (
    <div className="story-card">
      <div className="card-header">
        <img src={image} alt="participant" />
        <div className="feedback-container">
          <p>{feedback}</p>
        </div>
      </div>
      <div className="card-footer">
        <span>{name}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default StoryCard;
