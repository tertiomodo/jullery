import { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

interface SliderProps {
  slides: React.ReactNode[];
  margin?: number;
}

export default function Slider({ slides, margin = 10 }: SliderProps) {
  const slidesTrack = useRef<HTMLUListElement>(null);
  const buttons = useRef(null);

  // States
  const [translatesArray, setTranslatesArray] = useState<number[]>([0]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [swipeStartedInSlider, setSwipeStartedInSlider] = useState<boolean>(false);

  useEffect(() => {
    setTranslates();
    setMarginBetweenSlides();

    const handleMouseUp = (e: MouseEvent) => {
      setEndSwipe(e as unknown as React.MouseEvent);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const setTranslates = () => {
    let translate = 0;
    const newTranslateArray = [];

    for (let i = 1; i < slides.length; i++) {
      newTranslateArray.push((translate -= 100 + margin));
    }

    setTranslatesArray(newTranslateArray);
  };

  const setMarginBetweenSlides = () => {
    const slideElements = slidesTrack.current?.querySelectorAll("[data-slide]");

    if (slideElements) {
      slideElements.forEach((slide, index) => {
        if (index + 1 !== slides.length && margin !== 0) {
          (slide as HTMLElement).style.setProperty("margin-right", `${margin}%`);
        }
      });
    }
  };

  const moveSlider = () => {
    if (slidesTrack.current) {
      slidesTrack.current.style.setProperty("transform", `translateX(${translatesArray[currentSlide]}%);`);
    }
  };

  const setActiveDot = () => {
    const dots = document.querySelectorAll("[data-dot]");

    dots.forEach((dot) => {
      dot.classList.remove("dotActive");
    });

    const currentDot = document.querySelector(`[data-dot="${currentSlide}"]`);
    currentDot?.classList.add("dotActive");
  };

  const changeCurrentSlide = (action: "next" | "back") => {
    if (action === "next") {
      setCurrentSlide((prev) => prev++);
    } else if (action === "back") {
      setCurrentSlide((prev) => prev--);
    }

    moveSlider();
    setActiveDot();
  };

  const setStartSwipe = (e: React.TouchEvent | React.MouseEvent) => {
    setSwipeStartedInSlider(true);
    setStart("changedTouches" in e ? e.changedTouches[0].clientX : e.clientX);
  };

  const setEndSwipe = (e: React.TouchEvent | React.MouseEvent) => {
    if (swipeStartedInSlider === false) {
      return;
    }

    const end = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;

    if (start > end && currentSlide < slides.length - 1) {
      changeCurrentSlide("next");
    } else if (start < end && currentSlide > 0) {
      changeCurrentSlide("back");
    }

    setSwipeStartedInSlider(false);
  };

  const handleButtonClick = (direction: "next" | "back") => {
    if (direction === "next" && currentSlide < slides.length - 1) {
      changeCurrentSlide(direction);
    } else if (direction === "back" && currentSlide > 0) {
      changeCurrentSlide(direction);
    }
  };

  const dotsHandler = () => {
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const dotData = target && Number(target.dataset.dot);

        setCurrentSlide(dotData);
        moveSlider();

        dots.forEach((dot) => {
          dot.classList.remove("dotActive");
        });

        target.classList.add("dotActive");
      });
    });
  };

  // setTranslates();
  // setMarginBetweenSlides();
  // swipeHandler();
  // dotsHandler();

  return (
    <div className={styles.slider}>
      <div className={styles.slidesWrapper}>
        <ul
          ref={slidesTrack}
          onTouchStart={() => setStartSwipe}
          onTouchEnd={() => setEndSwipe}
          onMouseDown={() => setStartSwipe}
          className={styles.slidesTrack}
        >
          {slides.map((slide, index) => {
            return (
              <li key={index} className={styles.slide} data-slide>
                {slide}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.buttons}>
        <button ref={buttons} onClick={() => handleButtonClick("back")} className={styles.button}>
          Back
        </button>
        <button ref={buttons} onClick={() => handleButtonClick("next")} className={styles.button}>
          Next
        </button>
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            data-dot={index}
            className={clsx(styles.dot, { [styles.dotActive]: currentSlide === index })}
          ></button>
          // <span
          //   key={index}
          //   data-dot={index}
          //   className={`dot ${currentSlide === index ? "dotActive" : ""}`}
          //   onClick={() => handleDotClick(index)}
          // />
        ))}
        {/* <button className={(styles.dot, styles.dotActive)} data-dot="0"></button>
        <button className={styles.dot} data-dot="1"></button>
        <button className={styles.dot} data-dot="2"></button>
        <button className={styles.dot} data-dot="3"></button> */}
      </div>
    </div>
  );
}
