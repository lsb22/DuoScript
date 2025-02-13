import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import quality from "../assets/images/quality_img.jpg";
import planning from "../assets/images/planning.jpg";
import time from "../assets/images/timely_img.avif";
import { useEffect, useRef } from "react";

interface CardsStucture {
  title: string;
  desc: string;
  img: string;
}

interface Props {
  aboutRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const AboutSection = ({ aboutRef }: Props) => {
  const about_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (about_ref.current) aboutRef(about_ref);
  });

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

  let active = 1;
  const handleClick = (dir: string) => {
    const items = document.querySelectorAll(".abt-card");

    if (dir === "prev") {
      active = active - 1 > -1 ? active - 1 : 2;
    } else {
      active = active + 1 < 3 ? active + 1 : 0;
    }

    for (let i = 0; i < 3; i++) {
      let item = items[i] as HTMLElement;
      if (i === active) {
        item.style.opacity = "1";
      } else item.style.opacity = "0";
    }
  };

  return (
    <Box className="section-about">
      <Box ref={about_ref}></Box>
      <Box className="about-heading" textAlign="center">
        <Text>WhyUs?</Text>
      </Box>
      <Box className="abt-card-container">
        {cardsData.map((card, index) => (
          <Card.Root key={index} className="abt-card">
            <Image src={card.img} className="abt-card-img" />
            <Card.Body>
              <Card.Title className="abt-card-title">{card.title}</Card.Title>
              <Card.Description color="blackAlpha.800" className="abt-desc">
                {card.desc}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Box>
      <Button id="prev" onClick={() => handleClick("prev")}>
        {"<"}
      </Button>
      <Button id="next" onClick={() => handleClick("next")}>
        {">"}
      </Button>
    </Box>
  );
};

export default AboutSection;
