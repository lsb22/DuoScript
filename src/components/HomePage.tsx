import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import DisplayCards from "./DisplayCards";
import DisplayName from "./DisplayName";
import Services from "./Services";
const HomePage = () => {
  return (
    <>
      <Box className=" section section-1">
        <Grid
          templateAreas={{ lg: `"nav nav" "cards Name"`, base: `"nav cards"` }}
          templateRows={{ lg: "12vh 88vh", base: "10vh 90vh" }}
          templateColumns={{ lg: "50vw 50vw" }}
        >
          <GridItem area={"nav"}>
            <NavBar />
          </GridItem>
          <GridItem area={"cards"} padding={20}>
            <DisplayCards />
          </GridItem>
          <GridItem area={"Name"}>
            <DisplayName />
          </GridItem>
        </Grid>
      </Box>
      <Box className="section section-2">
        <Services />
      </Box>
    </>
  );
};

export default HomePage;
