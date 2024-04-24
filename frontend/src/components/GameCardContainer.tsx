import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      width="100%"
      boxShadow="md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
