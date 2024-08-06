import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w={{ base: "65%", md: "100%" }}
    margin={"0 auto"}
    textAlign="center"
    mt={4}
    boxShadow="lg"
    background={useColorModeValue("beige", "whiteAlpha.300")}
    borderRadius={20}
    _hover={{ transform: "scale(1.05)" }}
    transition=".3s transform"
  >
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer" p={5}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="500px"
          height="300px"
        />
        <Box p={3}>
          <LinkOverlay href={`/projects/${id}`}>
            <Heading fontSize={20} color="#8b37fa" fontWeight={"bold"}>
              {title}
            </Heading>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </Box>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
