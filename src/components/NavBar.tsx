import { HStack, Text, Box, Button, Image } from "@chakra-ui/react";
import logo from "../assets/images/duo_script_logo.png";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Box pl={8}>
        {/* <Text className="nav-logo">Logo</Text> */}
        <Image src={logo} boxSize={20} className="logo" />
      </Box>
      <HStack>
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
          Contact
        </Button>
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => window.scrollTo(0, 2000)}
        >
          About
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
