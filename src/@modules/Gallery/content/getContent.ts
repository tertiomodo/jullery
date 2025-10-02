import img0 from "./img/img0.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";
import img13 from "./img/img13.jpg";
import img14 from "./img/img14.jpg";
import img15 from "./img/img15.jpg";

interface Image {
  id: number;
  image: string;
}

interface Props {
  contentId: string;
  images: Image[];
  text: string;
  sliderPosition: "right" | "left";
}

export const content: Props[] = [
  {
    contentId: "gallery0",
    images: [
      {
        id: 0,
        image: img0,
      },
      {
        id: 1,
        image: img1,
      },
      {
        id: 2,
        image: img2,
      },
      {
        id: 3,
        image: img3,
      },
    ],
    text: "In the golden glow of the sunset, the rocks and forests merge into a single living organism. The panorama that opens up from such a height awakens a feeling of unity with the world and delight in its beauty.",
    sliderPosition: "right",
  },
  {
    contentId: "gallery1",
    images: [
      {
        id: 0,
        image: img4,
      },
      {
        id: 1,
        image: img5,
      },
      {
        id: 2,
        image: img6,
      },
      {
        id: 3,
        image: img7,
      },
    ],
    text: "The soft autumn glow fills every detail of the forest with warmth and calm. The atmosphere of quiet solitude and closeness to nature awakens a feeling of harmony and peace, bringing a gentle nostalgia and thoughtfulness.",
    sliderPosition: "left",
  },
  {
    contentId: "gallery2",
    images: [
      {
        id: 0,
        image: img8,
      },
      {
        id: 1,
        image: img9,
      },
      {
        id: 2,
        image: img10,
      },
      {
        id: 3,
        image: img11,
      },
    ],
    text: "The gentle power of touches and subtle details brings back a sense of connection to the moment.",
    sliderPosition: "right",
  },
  {
    contentId: "gallery3",
    images: [
      {
        id: 0,
        image: img12,
      },
      {
        id: 1,
        image: img13,
      },
      {
        id: 2,
        image: img14,
      },
      {
        id: 3,
        image: img15,
      },
    ],
    text: "The vastness of the mountains, wrapped in silence, seems to pause under heavy clouds. In these images, one can feel the grandeur of nature and a silent strength that conveys peace and admiration.",
    sliderPosition: "left",
  },
];
