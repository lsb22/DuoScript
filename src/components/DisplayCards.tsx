import { Card, Text, Image, Box } from "@chakra-ui/react";
import email from "../assets/images/Formal_Email.png";
import img2 from "../assets/images/apprameya_proj_2.jpg";
import img3 from "../assets/images/apprameya_proj_3.webp";
import img4 from "../assets/images/apprameya_proj_4.jpg";
import { useState } from "react";

interface CardProps {
  id: number;
  img: string;
  desc: string;
}

const cardsData: CardProps[] = [
  { id: 1, img: email, desc: "Email's" },
  { id: 2, img: img2, desc: "Product descriptions" },
  { id: 3, img: img3, desc: "Call to action" },
  { id: 4, img: img4, desc: "Script writing" },
];

const DisplayCards = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const getCardClass = (index: number): string => {
    if (index === currentIndex) return "card card--current";
    if (index === (currentIndex + 1) % cardsData.length)
      return "card card--next";
    return "card card--out";
  };

  return (
    <Box className="cards">
      {cardsData.map((card, index) => (
        <Card.Root
          key={card.id}
          className={getCardClass(index)}
          onClick={() => handleCardClick(index)}
          overflow="hidden"
        >
          <Image src={card.img} objectFit="cover" />
          <Card.Body>
            <Text fontSize="2rem" fontWeight="500">
              {card.desc}
            </Text>
          </Card.Body>
        </Card.Root>
      ))}
    </Box>
  );
};

export default DisplayCards;
