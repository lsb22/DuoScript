import {
  Box,
  Button,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger,
  HStack,
  Image,
} from "@chakra-ui/react";
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
      </HStack>
      <Box className="nav-drawer">
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Box className="hamburger-menu">
              <Box className="bar"></Box>
              <Box className="bar"></Box>
              <Box className="bar"></Box>
            </Box>
          </DrawerTrigger>
          <DrawerContent offset="4" rounded="md" className="nav-drawer-content">
            <DrawerBody className="drawer-text">
              <p onClick={() => alert("1st p clicked")}>Services</p>
              <p>About</p>
              <p>Contact</p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button
                  variant="outline"
                  color="#010203"
                  _hover={{ color: "white" }}
                >
                  Close
                </Button>
              </DrawerActionTrigger>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </HStack>
  );
};

export default NavBar;
