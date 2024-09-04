import shoeImg from "@/public/assets/shoe2-min.png";
import shoeImg2 from "@/public/assets/shoe1-min.png";
import shoeImg3 from "@/public/assets/shoe3-min.png";
import fBanner from "@/public/assets/feature1P.png";
import fBanner2 from "@/public/assets/feature2P.png";
import fShoe from "@/public/assets/fS1.png";
import fShoe2 from "@/public/assets/fS2.png";
import pImg from "@/public/assets/product1.png";
import pImg2 from "@/public/assets/product12.png";
import pImg3 from "@/public/assets/product13.png";
import pImg4 from "@/public/assets/product14.png";
import pImg5 from "@/public/assets/product15.png";
import pImg6 from "@/public/assets/product16.png";
import pImg7 from "@/public/assets/product17.png";

import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

export const BannerShoeData = [
  {
    id: 11,
    image: shoeImg,
    title: "Men's Original",
    subTile: "New Sneaker in Town",
  },
  {
    id: 12,
    image: shoeImg2,
    title: "Women's Original",
    subTile: "Winter Fashion",
  },
  {
    id: 13,
    image: shoeImg3,
    title: "2024 January",
    subTile: "New Spring Collection",
  },
];

export const FeatureData = [
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

export const ProductData = [
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

export const FooterData = [
  {
    id: 11,
    title: "contact",
    children: [
      { text: "Email: mousumitu@gmail.com" },
      { text: "Phone: +880168xxxxxx" },
      { text: "Locations: Dhaka, Bangladesh" },
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
