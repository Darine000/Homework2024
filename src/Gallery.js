import React from 'react';
import '../src/index.css';

function Card({ imageSrc, alt, text }) {
  return (
    <div className="col">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={alt} />
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="gallery">
      <h3>Student Works Gallery</h3>
      <div className="row">
        <Card
          imageSrc="/img/imgGallery_1.png"
          alt="..."
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
        <Card
          imageSrc="/img/imgGallery_2.png"
          alt="..."
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
        <Card
          imageSrc="/img/imgGallery_3.webp"
          alt="..."
          text="This is a longer card with supporting text below as a natural lead-in to additional content."
        />
        <Card
          imageSrc="/img/imgGallery_4.webp"
          alt="..."
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
      </div>
    </div>
  );
}

export default Gallery;