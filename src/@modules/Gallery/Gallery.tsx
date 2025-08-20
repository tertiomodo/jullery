import GalleryTitle from "./components/GalleryTitle/GalleryTitle";
import GallerySection from "./components/GallerySection/GallerySection";
import { getContent } from "./content/getContent";

const content = getContent();

const Gallery: React.FC = () => {
  return (
    <>
      <GalleryTitle />
      {content.map((item) => (
        <GallerySection
          key={item.contentId}
          images={item.images}
          text={item.text}
        />
      ))}
    </>
  );
};

export default Gallery;
