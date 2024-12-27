import { HStack, Text, Box } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Box pl={8}>
        <Text className="nav-logo">Logo</Text>
      </Box>
      <HStack color="gold">
        <Text mr={8}>Service</Text>
        <Text mr={8}>Contact</Text>
        <Text mr={8}>About</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
