import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { MdLocationOn, MdEmail } from "react-icons/md";

export const contactUs = [
  {
    id: 1,
    name: "75B Adeyemo Akapo, Omole Phase 1. Ikeja, Lagos state",
    link: "https://goo.gl/maps/LmC6gC65kjZh86k1A",
    icon: <MdLocationOn />,
  },
  {
    id: 2,
    name: "+2349058590355",
    link: "tel:+2349058590355",
    icon: <HiPhoneArrowUpRight />,
  },
  {
    id: 3,
    name: "+2349058590357",
    link: "tel:+2349058590357",
    icon: <HiPhoneArrowUpRight />,
  },
  {
    id: 4,
    name: "+2349058590356",
    link: "tel:+2349058590356",
    icon: <HiPhoneArrowUpRight />,
  },
  {
    id: 5,
    name: "clientservice@adronhomesproperties.com",
    link: "mailto:clientservice@adronhomesproperties.com",
    icon: <MdEmail />,
  },
];

export const workWithUs = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Blog", link: "/blog" },
];

export const socialLink = [
  { href: "https://www.facebook.com/AdronHomesOfficial", icon: <FaFacebook />, alt: "facebook logo" },
  { href: "https://www.twitter.com/AdronHomes", icon: <FaTwitter />, alt: "twitter logo" },
  { href: "https://www.instagram.com/adronhomesofficial", icon: <FaInstagram />, alt: "instagram logo" },
  { href: "https://www.youtube.com/@adronhomesofficial5941", icon: <FaYoutube />, alt: "youtube logo" },
]