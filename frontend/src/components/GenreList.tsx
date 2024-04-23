import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCoppedImgUrl from "../services/image-url";

const GenreList = () => {
  const { data, loading, error } = useGenres();
  const skeletons = [...Array(19)];

  if (error) return null;
  if (loading)
    return (
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
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCoppedImgUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
