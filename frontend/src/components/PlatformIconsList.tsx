import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { RiMacLine } from "react-icons/ri";
import { SiAtari, SiSega } from "react-icons/si";
import { BsGlobe, BsNintendoSwitch, BsJoystick } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { PiTelevision } from "react-icons/pi";
import { GiRetroController } from "react-icons/gi";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    ios: FaApple,
    android: DiAndroid,
    web: BsGlobe,
    mac: RiMacLine,
    atari: SiAtari,
    sega: SiSega,
    "commodore-amiga": BsJoystick,
    "3do": PiTelevision,
    "neo-geo": GiRetroController,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
