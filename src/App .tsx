import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/genreList";
import { useState } from "react";
import { Genre } from "./Hooks/usedGenres";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg"></Show>
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GridItem />
      </GridItem>
    </Grid>
  );
}

export default App;
