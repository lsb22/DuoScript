import { HStack, Text, Box, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Box pl={8}>
        <Text className="nav-logo">Logo</Text>
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
