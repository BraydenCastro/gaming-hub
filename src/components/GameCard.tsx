import { Card, CardBody, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { Games } from "../Hooks/usedGames";
import React from "react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/images-urls";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platform.map((p) => p.platform)}
          />

          <CriticScore score={game.metaCritic} />
        </HStack>
        S
      </CardBody>
    </Card>
  );
};
export default GameCard;
