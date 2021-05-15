import React from "react";
import web from "../images/web.png";
import computer from "../images/Graphics.jpg";
import pc from "../images/pc.jpg";

const ImageSlider = () => {
  return (
    <div className="">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="7000">
            <img src={computer} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={web} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={pc} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
