import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Leanne Graham",
    isOnline: true,
    match: "78",
    description:
      "An Accountant. Currently unemployed.",
    message:
      "I am a workholic, and very mindful of working ethics.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Clement Bauch",
    match: "93",
    description:
      "Full-time Model. Occasional Photographer.",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Ervin Howell",
    match: "45",
    description:
      "Full-time Developer. A Full Stack Developer. 15 years of working experience",
    isOnline: false,
    message:
      "Love the clicks from keyboard a lot.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Crestview Academy",
    match: "88",
    description:
      "A school, a better medium to help shape your kids.",
    isOnline: true,
    message: "We excel at it all, in terms of academia and sports.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "A Fashion Designer at Bromass.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "95",
    description:
      "An Electrical Engineer. A Feminist.",
    isOnline: true,
    message:
      "I've always wanted to be someone younger ladies could look up to and be postively inspired.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "A Teacher",
    isOnline: true,
    message:
      "I love to impact knowledge into the upcoming generation.",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "85",
    description:
      "A Model. An Actress.",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Zenith Bank",
    match: "74",
    description:
      "Bank",
    isOnline: true,
    message:
      "A leading multinational financial service provider",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Andria DuBuque",
    match: "98",
    description:
      "A Lawyer. Law Enthusias.",
    isOnline: false,
    message:
      "You want order in Florida?",
    image: IMAGE_10,
  },
];

export default data;
