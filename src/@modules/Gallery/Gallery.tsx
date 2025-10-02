import GalleryTitle from "./components/GalleryTitle/GalleryTitle";
import GallerySection from "./components/GallerySection/GallerySection";
import { content } from "./content/getContent";

const Gallery: React.FC = () => {
  return (
    <>
      <GalleryTitle />
      {content.map(({ contentId, images, text, sliderPosition }) => (
        <GallerySection
          sectionId={contentId}
          key={contentId}
          images={images}
          text={text}
          sliderPosition={sliderPosition}
        />
      ))}
    </>
  );
};

export default Gallery;
