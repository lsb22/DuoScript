import { Box, Button, Text, VStack } from "@chakra-ui/react";
const DisplayName = () => {
  return (
    <Box className="display-name-container">
      <VStack>
        <Text className="title">
          Duo<span className="title-script-part">Script</span>
        </Text>
        <Box className="display-text" textAlign="center" fontWeight="400">
          <Text>
            Crafting copys that <span className="title-sub">speak</span>,{" "}
            <span className="title-sub">connect</span>, and{" "}
            <span className="title-sub">convert</span>
          </Text>
        </Box>
        <Button mt={10} colorPalette="yellow">
          <Text className="home-button-text">Contact</Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default DisplayName;
