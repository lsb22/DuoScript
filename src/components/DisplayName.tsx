import { Box, Button, Text, VStack } from "@chakra-ui/react";
const DisplayName = () => {
  return (
    <VStack>
      <Text className="title">
        Duo<span className="title-script-part">Script</span>
      </Text>
      <Box textAlign="center" className="display-text">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi{" "}
          <span className="display-text-part">
            dolores facere expedita et, minus
          </span>{" "}
          incidunt corrupti recusandae quod
        </Text>
      </Box>
      <Button mt={10} colorPalette="yellow">
        <Text className="home-button-text">Contact</Text>
      </Button>
    </VStack>
  );
};

export default DisplayName;
