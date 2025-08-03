import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  children: ReactNode;
  images: {
    id: number;
    image: string;
    caption?: string;
  }[];
  additionStyles?: string;
}

const SliderBg: React.FC<Props> = ({
  activeIndex,
  children,
  images,
  additionStyles,
}) => {
  return (
    <div className={`${styles.wrapper} ${additionStyles}`}>
      {images.map(({ id, image, caption }) => (
        <img
          key={id}
          src={image}
          alt={`${caption} background`}
          className={`${styles.slide} ${
            id === activeIndex ? styles.active : ""
          }`}
        />
      ))}
      {children}
    </div>
  );
};

export default SliderBg;
