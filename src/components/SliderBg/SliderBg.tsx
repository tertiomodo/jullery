import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  children: ReactNode;
  slidesContent: string[];
  additionStyles?: string;
}

const SliderBg: React.FC<Props> = ({ activeIndex, children, slidesContent, additionStyles }) => {
  return (
    <div className={`${styles.wrapper} ${additionStyles}`}>
      {slidesContent.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`${styles.slide} ${index === activeIndex ? styles.active : ""}`}
        />
      ))}
      {children}
    </div>
  );
};

export default SliderBg;
