import { useState, useRef, useEffect } from "react";
import SliderBg from "@components/SliderBg/SliderBg";
import Slider from "@components/Slider/Slider";
import styles from "./style.module.css";

interface Image {
  id: number;
  image: string;
}

interface Props {
  sectionId: string;
  images: Image[];
  text: string;
  sliderPosition: "right" | "left";
}

const GallerySection: React.FC<Props> = ({
  sectionId,
  images,
  text,
  sliderPosition,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [popup, setPopup] = useState<boolean>(false);
  const [popupHeight, setPopupHeight] = useState<number>(0);
  const textElement = useRef<HTMLParagraphElement>(null);

  const updatePopupHeight = () => {
    const text = textElement.current as HTMLParagraphElement;
    setPopupHeight(text.offsetHeight);
  };

  const clickHandler = () => {
    setPopup((prev) => !prev);
    updatePopupHeight();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resizeHandler = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        updatePopupHeight();
      }, 50);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section
      data-section={sectionId}
      className={`${styles.gallerySection} sectionAnimation`}
    >
      <SliderBg
        activeIndex={activeIndex}
        images={images}
        additionStyles={styles.sliderBg}
      />
      <div className={styles.wrapper}>
        <div className={`${styles.content} ${styles[sliderPosition]}`}>
          <div className={styles.textWrapper}>
            <div
              className={`${styles.textBg} ${popup ? styles.active : ""}`}
              style={{ height: popup ? popupHeight : "" }}
              onClick={clickHandler}
            >
              <div className={`${styles.plus} ${popup ? styles.active : ""}`} />
            </div>
            <p
              ref={textElement}
              className={`${styles.text} ${popup ? styles.active : ""}`}
            >
              {text}
            </p>
          </div>
          <div
            className={`${styles.sliderWrapper} ${popup ? styles.active : ""}`}
          >
            <Slider
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              images={images}
              additionStyles={styles.slider}
              additionDotsStyles={styles.dots}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
