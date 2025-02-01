import { Box, Text, VStack } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box className="section-about">
      <Box className="animate-background">
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
        <div className="back-div"></div>
      </Box>
      <VStack>
        <Box className="about-heading">
          <Text>Why Us?</Text>
        </Box>
        <Box className="about-description" textAlign="center">
          <Box className="about-item">
            <Text>
              We prioritize <span>quality</span> and <span>originality</span> in
              every word we write.
            </Text>
          </Box>
          <Box className="about-item">
            <Text>
              With experience across industries and platforms,{" "}
              <span>we tailor our approach</span> to meet your specific needs.
            </Text>
          </Box>
          <Box className="about-item">
            <Text>
              <span>Timely delivery</span> is our commitment, ensuring your
              projects stay on track.
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default AboutSection;
