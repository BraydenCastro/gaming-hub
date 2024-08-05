import useGenre from "../Hooks/usedGenres";

import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/images-urls";

const GenreList = () => {
  const { Data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {Data.map((Genre) => (
        <ListItem key={Genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(Genre.image_background)}
            />
            <Button
              onClick={() => console.log(Genre)}
              fontSize="lg"
              variant="link"
            >
              {Genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
