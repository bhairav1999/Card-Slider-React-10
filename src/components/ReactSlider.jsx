import React, { useEffect, useState } from "react";
import data from "./data";
import "./ReactSlider.css";

const ReactSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < data.length - visibleCards + visibleCards) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const updateVisibleCards = () => {
    if (window.innerWidth <= 450) {
      setVisibleCards(1);
    } else if (window.innerWidth <= 650) {
      setVisibleCards(2);
    } else if (window.innerWidth <= 1000) {
      setVisibleCards(3);
    } else {
      setVisibleCards(4);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <>
      <h1 className="React-slider-title">React Slider</h1>
      <div className="main-wrapper">
        <button onClick={prevSlide} disabled={currentIndex === 0}>
          Prev
        </button>
        {data
          .slice(currentIndex, currentIndex + visibleCards)
          .map((item, id) => (
            <div key={id} className="div">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        <button
          onClick={nextSlide}
          disabled={currentIndex === data.length - visibleCards}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ReactSlider;
