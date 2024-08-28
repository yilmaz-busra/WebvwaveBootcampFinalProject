import React from "react";
import "./styles.css";

import Card from "react-bootstrap/Card";

const StoryCard = ({ name, title, feedback }) => {
  return (
    <div className="testimonials-section">
      .{" "}
      <div className="testimonial">
        <Card style={{ width: "18rem ", height: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>{feedback}</Card.Text>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StoryCard;
