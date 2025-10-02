import React, { useState } from "react";
import styles from "./styles.module.css";

interface Image {
  id: number;
  image: string;
}

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  images: Image[];
  additionStyles?: string;
  additionDotsStyles?: string;
}

const Slider: React.FC<Props> = ({
  activeIndex,
  setActiveIndex,
  images,
  additionStyles,
  additionDotsStyles,
}) => {
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
    handleDragEnd(e.changedTouches[0].clientX);
  };

  const mouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const mouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX);
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      {images.map(({ id, image }) => (
        <div
          key={id}
          className={`${styles.slide} ${additionStyles} ${
            id === activeIndex ? styles.active : ""
          }`}
        >
          <img className={styles.image} src={image} alt="" draggable="false" />
        </div>
      ))}
      <div className={`${styles.dots} ${additionDotsStyles}`}>
        {images.map(({ id }) => (
          <button
            key={id}
            className={`${styles.dot} ${
              id === activeIndex ? styles.dotActive : ""
            }`}
            onClick={() => setActiveIndex(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
