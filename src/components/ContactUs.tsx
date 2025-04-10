import {
  Box,
  Button,
  Card,
  Field,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { Tooltip } from "../components/ui/tooltip";
import { useEffect, useRef } from "react";
import instagram from "../assets/images/instagram_2.webp";
import twitter from "../assets/images/twitter2_1.webp";
import youtube from "../assets/images/youtube_1.webp";

interface Props {
  contactRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const ContactUs = ({ contactRef }: Props) => {
  const contact_ref = useRef<HTMLDivElement>(null);
  const form_ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contact_ref.current) contactRef(contact_ref);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form_ref.current) form_ref.current.reset();

    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("access_key", "3fe1278a-3266-46e6-b5ad-c80121e6f90b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message. Please try again.");
      console.log("Error", data);
    }
  };

  const handleClick = () => {
    navigator.clipboard
      .writeText("duoscript25@gmail.com")
      .then(() => alert("Email successfully copied"))
      .catch(() => alert("Failed to copy email."));
  };

  return (
    <Box className="contact-section">
      <Box ref={contact_ref}></Box>
      <Box textAlign="center">
        <Text className="contact-heading">Contact Us</Text>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <GridItem>
          <VStack>
            <Box textAlign="left">
              <Text className="contact-hd1">
                How can we <span>help you?</span>
              </Text>
              <Text className="contact-hd2">
                Fill in the form or drop an email
              </Text>
              <Tooltip showArrow content="Click to copy email">
                <Button
                  className="contact-hd3-bt"
                  bgColor="gold"
                  color="blue"
                  onClick={handleClick}
                >
                  <Text>duoscript25@gmail.com</Text>
                </Button>
              </Tooltip>
            </Box>
          </VStack>
        </GridItem>
        <GridItem className="contact-card-grid">
          <Card.Root className="contact-card">
            <Card.Body>
              <form onSubmit={handleSubmit} ref={form_ref}>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder="Enter your Name"
                      type="text"
                      name="name"
                      required
                    />
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder="Enter your Email"
                      type="email"
                      name="email"
                      required
                    />
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder="Enter the subject"
                      type="text"
                      name="subject"
                    />
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Textarea
                      className="peer cont-input"
                      placeholder="Enter your message..."
                      name="message"
                      resize="none"
                      required
                    />
                  </Box>
                </Field.Root>
                <Button className="cont-submit" type="submit">
                  Send
                </Button>
              </form>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
      <HStack className="contact-social-butt" justifyContent="center">
        <a href="#" target="_blank" className="butt">
          <img src={twitter} />
        </a>
        <a
          href="https://www.instagram.com/aprameyakl?igsh=dmhobWlkZ2p0a3hp"
          target="_blank"
          className="butt"
        >
          <img src={instagram} />
        </a>
        <a
          href="https://youtube.com/@duoscript?si=zDz5k-N6qKUC_Rhy"
          target="_blank"
          className="butt"
        >
          <img src={youtube} />
        </a>
      </HStack>
    </Box>
  );
};

export default ContactUs;
