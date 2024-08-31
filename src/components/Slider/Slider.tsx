import { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";

interface SliderProps {
  slides: React.ReactNode[];
  margin?: number;
}

export default function Slider({ slides, margin = 10 }: SliderProps) {
  const slidesTrack = useRef(null);
  const buttons = useRef(null);
  const dotsWrapper = document.querySelector("[data-dots-wrapper]");
  const dots = document.querySelectorAll("[data-dot]");

  // States
  const [translatesArray, setTranslatesArray] = useState<number[]>([0]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [swipeStartedInSlider, setSwipeStartedInSlider] = useState<boolean>(false);

  useEffect(() => {
    setTranslates();
    setMarginBetweenSlides();
  }, []);

  function setTranslates() {
    let translate = 0;
    const newTranslateArray = [];

    for (let i = 1; i < slides.length; i++) {
      newTranslateArray.push((translate -= 100 + margin));
    }

    setTranslatesArray(newTranslateArray);
  }

  function setMarginBetweenSlides() {
    slides.forEach((slide, index) => {
      if (index + 1 !== slides.length && margin !== 0) {
        slide.style = `margin-right: ${margin}%;`;
      }
    });
  }

  function moveSlider() {
    slidesTrack.style = `transform: translateX(${translatesArray[currentSlide]}%);`;
  }

  function setActiveDot() {
    dots.forEach((dot) => {
      dot.classList.remove("dotActive");
    });

    const currentDot = dotsWrapper.querySelector(`[data-dot="${currentSlide}"]`);
    currentDot.classList.add("dotActive");
  }

  function changeCurrentSlide(action: "next" | "back") {
    if (action === "next") {
      setCurrentSlide((prev) => prev++);
    } else if (action === "back") {
      setCurrentSlide((prev) => prev--);
    }

    moveSlider();
    setActiveDot();
  }

  function setStartSwipe(e) {
    setSwipeStartedInSlider(true);
    setStart(e.type === "touchstart" ? e.changedTouches[0].clientX : e.clientX);
  }

  function setEndSwipe(e) {
    if (swipeStartedInSlider === false) {
      return;
    }

    const end = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;

    if (start > end && currentSlide < slides.length - 1) {
      changeCurrentSlide("next");
    } else if (start < end && currentSlide > 0) {
      changeCurrentSlide("back");
    }

    setSwipeStartedInSlider(false);
  }

  function swipeHandler() {
    slidesTrack.addEventListener("touchstart", setStartSwipe);
    slidesTrack.addEventListener("touchend", setEndSwipe);
    slidesTrack.addEventListener("mousedown", setStartSwipe);
    document.addEventListener("mouseup", setEndSwipe);
  }

  function handleButtonClick(direction: "next" | "back") {
    if (direction === "next" && currentSlide < slides.length - 1) {
      changeCurrentSlide(direction);
    } else if (direction === "back" && currentSlide > 0) {
      changeCurrentSlide(direction);
    }
  }

  function dotsHandler() {
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
  }

  // setTranslates();
  // setMarginBetweenSlides();
  // swipeHandler();
  // dotsHandler();

  return (
    <div className={styles.slider}>
      <div className={styles.slidesWrapper}>
        <ul ref={slidesTrack} className={styles.slidesTrack}>
          {/* It should come from props */}
          <li className={styles.slide}>
            <div className={styles.slideCard}>1</div>
          </li>
          <li className={styles.slide}>
            <div className={styles.slideCard}>2</div>
          </li>
          <li className={styles.slide}>
            <div className={styles.slideCard}>3</div>
          </li>
          <li className={styles.slide}>
            <div className={styles.slideCard}>4</div>
          </li>
          {/* It should come from props */}
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
      <div className={styles.dots} data-dots-wrapper>
        <button className={(styles.dot, styles.dotActive)} data-dot="0"></button>
        <button className={styles.dot} data-dot="1"></button>
        <button className={styles.dot} data-dot="2"></button>
        <button className={styles.dot} data-dot="3"></button>
      </div>
    </div>
  );
}
