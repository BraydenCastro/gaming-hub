import { Card, CardBody, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { Games } from "../Hooks/usedGames";
import React from "react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
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
