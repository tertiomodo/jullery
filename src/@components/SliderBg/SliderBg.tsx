import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  images: {
    id: number;
    image: string;
  }[];
  additionStyles?: string;
  isBlur?: boolean;
}

const SliderBg: React.FC<Props> = ({
  activeIndex,
  images,
  additionStyles,
  isBlur,
}) => {
  return (
    <div className={`${styles.backgroundSlider} ${additionStyles}`}>
      {images.map(({ id, image }) => (
        <img
          key={id}
          draggable="false"
          src={image}
          alt=""
          className={`${styles.slide} ${
            id === activeIndex ? styles.active : ""
          }`}
        />
      ))}
      {isBlur && <div className={styles.blur}></div>}
    </div>
  );
};

export default SliderBg;
