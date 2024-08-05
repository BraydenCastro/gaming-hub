import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/genreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg"></Show>
      <GridItem area="aside">
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GridItem />
      </GridItem>
    </Grid>
  );
}

export default App;
