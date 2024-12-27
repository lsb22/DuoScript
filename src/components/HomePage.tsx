import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import DisplayCards from "./DisplayCards";
import DisplayName from "./DisplayName";
const HomePage = () => {
  return (
    <Grid
      templateAreas={{ lg: `"nav nav" "cards Name"`, base: `"nav cards"` }}
      templateRows={{ lg: "12vh 88vh", base: "10vh 90vh" }}
      templateColumns={{ lg: "50vw 50vw" }}
      height="100vh"
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
  );
};

export default HomePage;
