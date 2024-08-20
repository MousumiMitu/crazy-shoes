import shoeImg from "@/assets/shoe2.png";
import shoeImg2 from "@/assets/shoe1.png";
import shoeImg3 from "@/assets/shoe3.png";
import bgCover from "@/assets/banner-min.png";
import fBanner from "@/assets/feature1P.png";
import fBanner2 from "@/assets/feature2P.png";
import fShoe from "@/assets/fS1.png";
import fShoe2 from "@/assets/fS2.png";

export const bannerShoeData = [
  {
    id: 11,
    image: shoeImg,
    title: "Men's Original",
    subTile: "New Sneaker in Town",
    bgCover: bgCover,
  },
  {
    id: 12,
    image: shoeImg2,
    title: "Women's Original",
    subTile: "Winter Fashion",
    bgCover: bgCover,
  },
  {
    id: 13,
    image: shoeImg3,
    title: "2024 January",
    subTile: "New Spring Collection",
    bgCover: bgCover,
  },
];

export const featureData = [
  {
    id: 1,
    banner: fBanner,
    bannerText: "The Benefits of Running",
    bannerDesc: "Season of 30-50%",
    direction: "left",
    featureImg: fShoe,
    featureText: "Running Shoes",
    featureDesc: " Nike Just Do it",
  },
  {
    id: 12,
    banner: fBanner2,
    bannerText: "The Benefits of Running",
    bannerDesc: "Season of 30-50%",
    direction: "right",
    featureImg: fShoe2,
    featureText: "Running Shoes",
    featureDesc: " Nike Just Do it",
  },
];
