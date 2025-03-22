import { Box, Image, Button, Text } from "@chakra-ui/react";
import email from "../assets/images/email_2_1.webp";
import script from "../assets/images/apprameya_proj_4_1.webp";
import ads from "../assets/images/apprameya_proj_5_1.webp";
import caption from "../assets/images/caption_writing_2_1.webp";
import description from "../assets/images/apprameya_proj_7_1.webp";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useEffect, useRef } from "react";

interface ServiceCardProps {
  img: string;
  title: string;
  desc: String;
}

interface Props {
  servRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Services = ({ servRef }: Props) => {
  const services_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (services_ref.current) servRef(services_ref);
    const elements = document.querySelectorAll(".services-card");

    elements.forEach((element) => {
      element.addEventListener("touchstart", () => {
        element.classList.add("touch-hover-effect");
      });

      element.addEventListener("touchend", () => {
        setTimeout(() => {
          element.classList.remove("touch-hover-effect");
        }, 1200);
      });
    });
  }, []);

  const cards: ServiceCardProps[] = [
    {
      img: email,
      title: "Email writing",
      desc: "We craft compelling email copies that not only promote your product or service but also build a strong connection with your audience.",
    },
    {
      img: script,
      title: "Script writing",
      desc: "From short films to YouTube videos and feature-length movies, we create impactful scripts and engaging stories that bring your vision to life.",
    },
    {
      img: caption,
      title: "Caption writing",
      desc: "Our team writes creative and brand-aligned captions for Instagram ads, helping you stand out in the crowd.",
    },
    {
      img: description,
      title: "Description writing",
      desc: "We craft SEO-friendly YouTube descriptions that boost discoverability and clearly convey the value of your content.",
    },
    {
      img: ads,
      title: "Ads writing",
      desc: "We deliver persuasive ad content for promotional campaigns, posters, and marketing materials designed to capture attention and drive action.",
    },
  ];

  const handleOpenClick = () => {
    document.body.classList.add("active");
  };

  const handleCloseClick = () => {
    document.body.classList.remove("active");
  };

  return (
    <Box className="services">
      <Box ref={services_ref}></Box>
      <Box textAlign="center">
        <Text className="services-text">Services</Text>
      </Box>
      <Box className="services-card-container" textAlign="center">
        {cards.map((card, index) => (
          <Box className="services-card" key={index}>
            <Box className="dialog-container">
              <DialogRoot
                placement="center"
                motionPreset="slide-in-bottom"
                closeOnInteractOutside={false}
                size={{ lg: "md", sm: "xs" }}
              >
                <DialogTrigger asChild>
                  <Button
                    className="service-card-desc button-to-move"
                    onClick={handleOpenClick}
                  >
                    {card.title}
                  </Button>
                </DialogTrigger>
                <DialogContent className="services-dialog">
                  <DialogHeader>
                    <DialogTitle>
                      <Text fontWeight="700" className="service-dialog-title">
                        {card.title}
                      </Text>
                    </DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <Text
                      className="service-dialog-desc"
                      wordSpacing={2}
                      color="black"
                    >
                      {card.desc}
                    </Text>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button onClick={handleCloseClick}>Close</Button>
                    </DialogActionTrigger>
                  </DialogFooter>
                  <DialogCloseTrigger onClick={handleCloseClick} />
                </DialogContent>
              </DialogRoot>
            </Box>
            <Image className="services-card-img" src={card.img} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
