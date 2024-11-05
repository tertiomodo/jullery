import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  slidesContent: string[];
}

const Slider: React.FC<Props> = ({ activeIndex, setActiveIndex, slidesContent }) => {
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slidesContent.length) % slidesContent.length);
  };

  const moveSlider = (clientX: number) => {
    const diff = startX - clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragEnd = (clientX: number) => {
    if (isDragging) {
      setIsDragging(false);
      moveSlider(clientX);
    }
  };

  const touchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const touchEnd = (e: React.TouchEvent) => {
    handleDragEnd(e.touches[0].clientX);
  };

  const mouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const mouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
      >
        {slidesContent.map((slide, index) => (
          <div key={index} className={`${styles.slide} ${index === activeIndex ? styles.active : ""}`}>
            <img src={slide} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </div>
        ))}
        <div className={styles.dots}>
          {slidesContent.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
