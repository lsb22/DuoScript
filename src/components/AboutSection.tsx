import { Box, Card, Image, Text } from "@chakra-ui/react";
import quality from "../assets/images/quality_img.jpg";
import planning from "../assets/images/planning.jpg";
import time from "../assets/images/timely_img.avif";

interface CardsStucture {
  title: string;
  desc: string;
  img: string;
}

const AboutSection = () => {
  const cardsData: CardsStucture[] = [
    {
      title: "Quality And Originality",
      desc: "We prioritize quality and originality in every word we write.",
      img: quality,
    },
    {
      title: "Systematic Approach",
      desc: "With experience across industries and platforms, we tailor our approach to meet your specific needs.",
      img: planning,
    },
    {
      title: "Timely Delivery",
      desc: "Timely delivery is our commitment, ensuring your projects stay on track.",
      img: time,
    },
  ];

  return (
    <Box className="section-about">
      <Box className="about-heading" textAlign="center">
        <Text>WhyUs?</Text>
      </Box>
      <Box className="abt-card-container">
        {cardsData.map((card, index) => (
          <Card.Root key={index} className="abt-card">
            <Image src={card.img} className="abt-card-img" />
            <Card.Body>
              <Card.Title className="abt-card-title">{card.title}</Card.Title>
              <Card.Description color="blackAlpha.800">
                {card.desc}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Box>
    </Box>
  );
};

export default AboutSection;
