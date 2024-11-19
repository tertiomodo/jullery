import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
  caption?: { text: string; position: string }[];
  additionStyles?: string;
}

const Slider: React.FC<Props> = ({ activeIndex, setActiveIndex, images, caption, additionStyles }) => {
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
    <div
      className={`${styles.slider} ${additionStyles}`}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      {images.map((image, index) => (
        <div key={index} className={`${styles.slide} ${index === activeIndex ? styles.active : ""}`}>
          <div className={image}></div>
          {caption && <p className={`${styles.caption} ${caption[index].position}`}>{caption[index].text}</p>}
        </div>
      ))}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
