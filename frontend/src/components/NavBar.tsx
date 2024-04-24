import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/raven-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="65px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
