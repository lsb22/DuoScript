import { HStack, Box, Button, Image } from "@chakra-ui/react";
import logo from "../assets/images/duo_script_logo.png";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Box pl={8}>
        <Image src={logo} className="logo" />
      </Box>
      <HStack className="nav-butt-container">
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => window.scrollTo(0, 660)}
        >
          Service
        </Button>
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => window.scrollTo(0, 1320)}
        >
          About
        </Button>
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => window.scrollTo(0, 2000)}
        >
          Contact
        </Button>
        <Box className="nav-toggle">Open</Box>
      </HStack>
    </HStack>
  );
};

export default NavBar;
