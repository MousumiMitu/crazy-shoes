import shoeImg from "@/assets/shoe2.png";
import shoeImg2 from "@/assets/shoe1.png";
import shoeImg3 from "@/assets/shoe3.png";
import bgCover from "@/assets/banner-min.png";
import fBanner from "@/assets/feature1P.png";
import fBanner2 from "@/assets/feature2P.png";
import fShoe from "@/assets/fS1.png";
import fShoe2 from "@/assets/fS2.png";
import pImg from "@/assets/product1.png";
import pImg2 from "@/assets/product12.png";
import pImg3 from "@/assets/product13.png";
import pImg4 from "@/assets/product14.png";
import pImg5 from "@/assets/product15.png";
import pImg6 from "@/assets/product16.png";
import pImg7 from "@/assets/product17.png";
import pImg8 from "@/assets/product18.png";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

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

export const productData = [
  {
    id: 11,
    img: pImg,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
  {
    id: 112,
    img: pImg2,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
  {
    id: 113,
    img: pImg3,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
    newItem: true,
  },
  {
    id: 114,
    img: pImg4,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
  {
    id: 115,
    img: pImg5,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
    newItem: true,
  },
  {
    id: 116,
    img: pImg6,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
  {
    id: 117,
    img: pImg7,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
  {
    id: 118,
    img: pImg2,
    category: "lifestyle",
    title: "Air Jordan ",
    price: "160",
  },
];

export const footer = [
  {
    id: 11,
    title: "contact",
    children: [
      { text: "Email: mousumitu@gmail.com", iconImg: <GoMail /> },
      { text: "Phone: +880168xxxxxx", iconImg: <BsTelephone /> },
      { text: "Locations: Dhaka, Bangladesh", iconImg: <IoHomeOutline /> },
    ],
  },
  {
    id: 12,
    title: "my account",
    children: [
      { text: "My Account" },
      { text: "My Cart" },
      { text: "Wishlist" },
      { text: "Login" },
    ],
  },
  {
    id: 13,
    title: "information",
    children: [
      { text: "About Us" },
      { text: "Careers" },
      { text: "Privacy Policy" },
      { text: "Terms & Conditions" },
    ],
  },
  {
    id: 14,
    title: "custom service",
    children: [
      { text: "Help Center" },
      { text: "Returns" },
      { text: "Shipping Info" },
      { text: "Contact Us" },
    ],
  },
];
