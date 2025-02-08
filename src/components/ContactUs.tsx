import {
  Box,
  Button,
  Card,
  defineStyle,
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

const ContactUs = () => {
  const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "#F3DEC5",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    borderRadius: "4px",
    fontSize: "17px",
    padding: "4px",
    _peerPlaceholderShown: {
      color: "black",
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: "black",
      top: "-3",
      insetStart: "2",
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("access_key", "3fe1278a-3266-46e6-b5ad-c80121e6f90b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      (e.target as HTMLFormElement).reset();
    } else {
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
        <GridItem>
          <Card.Root className="contact-card" maxW="400px" ml={20}>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder=""
                      type="text"
                      name="name"
                      required
                    />
                    <Field.Label
                      css={floatingStyles}
                      className="cont-card-label1"
                    >
                      Name
                    </Field.Label>
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder=""
                      type="email"
                      name="email"
                      required
                    />
                    <Field.Label
                      css={floatingStyles}
                      className="cont-card-label1"
                    >
                      Email
                    </Field.Label>
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Input
                      className="peer cont-input"
                      placeholder=""
                      type="text"
                      name="subject"
                    />
                    <Field.Label
                      css={floatingStyles}
                      className="cont-card-label1"
                    >
                      Subject
                    </Field.Label>
                  </Box>
                </Field.Root>
                <Field.Root mb={5}>
                  <Box pos="relative" w="full">
                    <Textarea
                      className="peer cont-input"
                      placeholder=""
                      name="message"
                      resize="none"
                    />
                    <Field.Label
                      css={floatingStyles}
                      className="cont-card-label1"
                    >
                      Message
                    </Field.Label>
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
      <HStack className="contact-social-butt" justifyContent="center" gap={70}>
        <Button className="butt">Twitter</Button>
        <Button className="butt">Instagram</Button>
        <Button className="butt">LinkedIn</Button>
      </HStack>
    </Box>
  );
};

export default ContactUs;
