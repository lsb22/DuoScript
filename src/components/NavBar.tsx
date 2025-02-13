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

interface Props {
  scrollToServices: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

const NavBar = ({
  scrollToServices,
  scrollToAbout,
  scrollToContact,
}: Props) => {
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
          onClick={() => scrollToServices()}
        >
          Service
        </Button>
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => scrollToAbout()}
        >
          About
        </Button>
        <Button
          mr={8}
          variant="ghost"
          className="nav-butt"
          onClick={() => scrollToContact()}
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
              <DrawerActionTrigger border="none" display="block">
                <p onClick={() => scrollToServices()}>Services</p>
              </DrawerActionTrigger>
              <DrawerActionTrigger border="none" display="block">
                <p onClick={() => scrollToAbout()}>About</p>
              </DrawerActionTrigger>
              <DrawerActionTrigger border="none" display="block">
                <p onClick={() => scrollToContact()}>Contact</p>
              </DrawerActionTrigger>
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
