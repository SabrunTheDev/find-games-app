import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCoppedImgUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();
  const skeletons = [...Array(19)];

  if (error) return null;
  if (loading)
    return (
      <>
        <Heading fontSize="2xl" marginBottom={3} paddingY="5px">
          Genres
        </Heading>
        <List>
          {skeletons.map((_, index) => (
            <ListItem key={index} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText width="100px" height="32px" />
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} paddingY="5px">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCoppedImgUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
