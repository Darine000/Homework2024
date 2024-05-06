import React, { useState } from 'react';
import '../src/styles.css';

function Card({ image, title, description, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonColor = isHovered ? '#8BD4FF' : '#C6E8FC';

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function CourseCard() {
  return (
    <div className="course-card-container">
      <h3>Courses</h3>
      <div className="card-row">
        <Card
          image={process.env.PUBLIC_URL + '/img/imgCard_1.png'}
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Zapsat"
        />
        <Card
          image={process.env.PUBLIC_URL + '/img/imgCard_2.png'}
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Zapsat"
        />
        <Card
          image={process.env.PUBLIC_URL + '/img/imgCard_3.png'}
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content."
          buttonText="Zapsat"
        />
        <Card
          image={process.env.PUBLIC_URL + '/img/imgCard_4.png'}
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Zapsat"
        />
      </div>
    </div>
  );
}

export default CourseCard;