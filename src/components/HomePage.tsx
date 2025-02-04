import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import DisplayCards from "./DisplayCards";
import DisplayName from "./DisplayName";
import NavBar from "./NavBar";
import Services from "./Services";
import ContactUs from "./ContactUs";
const HomePage = () => {
  return (
    <>
      <Box className=" section section-1">
        <Grid
          templateAreas={{
            lg: `"nav nav" "cards Name"`,
            base: `"nav" "Name" "cards"`,
          }}
          templateRows={{ lg: "12vh 88vh", base: "10vh 90vh" }}
          templateColumns={{ lg: "50vw 50vw" }}
        >
          <GridItem area={"nav"}>
            <NavBar />
          </GridItem>
          <GridItem area={"cards"} pt={20}>
            <Flex justifyContent="center">
              <DisplayCards />
            </Flex>
          </GridItem>
          <GridItem area={"Name"}>
            <DisplayName />
          </GridItem>
        </Grid>
      </Box>
      <Box className="section section-2">
        <Services />
      </Box>
      <Box className="section section-3">
        <AboutSection />
      </Box>
      <Box className="section section-4">
        <ContactUs />
      </Box>
    </>
  );
};

export default HomePage;
