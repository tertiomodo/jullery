import styles from "./styles.module.css";

interface Props {
  activeIndex: number;
  images: {
    id: number;
    image: string;
  }[];
  additionStyles?: string;
}

const SliderBg: React.FC<Props> = ({ activeIndex, images, additionStyles }) => {
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
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default SliderBg;
