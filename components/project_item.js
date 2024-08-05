import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { HobbieItem } from "./hobbie_item";

export const ProjectItem = ({
  children,
  title,
  dateStart,
  dateEnd,
  website,
  documentation,
  stack,
  code,
  src,
}) => (
  <Box>
    <Box>
      <ChevronLeftIcon /> &nbsp;
      <NextLink href="/projects" scroll={false}>
        <Link>Back to Projects</Link>
      </NextLink>
    </Box>
    <Heading mt={2} mb={2}>
      {title}
    </Heading>
    {children}
    <List mt={5}>
      <ListItem>
        <ListIcon as={ChevronRightIcon} color="purple.500" boxSize={6} ml={3} />
        <HobbieItem>Date</HobbieItem>
        <Text ml={10} fontSize={14}>
          {dateStart}
          {dateEnd ? ` — ${dateEnd}` : ""}
        </Text>
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} color="purple.500" boxSize={6} ml={3} />
        <HobbieItem>Stack</HobbieItem>
        <Text ml={10} fontSize={14}>
          {stack}
        </Text>
      </ListItem>
      {website && (
        <ListItem>
          <ListIcon
            as={ChevronRightIcon}
            color="purple.500"
            boxSize={6}
            ml={3}
          />
          <HobbieItem>Website</HobbieItem>
          <Text ml={10} fontSize={14}>
            <Link target="_blank" href={website}>
              {website.slice(8)}&nbsp;
              <ExternalLinkIcon />
            </Link>
          </Text>
        </ListItem>
      )}
      {documentation && (
        <ListItem>
          <ListIcon
            as={ChevronRightIcon}
            color="purple.500"
            boxSize={6}
            ml={3}
          />
          <HobbieItem>Documentation</HobbieItem>
          <Text ml={10} fontSize={14}>
            <Link target="_blank" href={documentation}>
              {documentation.slice(8)}&nbsp;
              <ExternalLinkIcon />
            </Link>
          </Text>
        </ListItem>
      )}
      {code && (
        <ListItem>
          <ListIcon
            as={ChevronRightIcon}
            color="purple.500"
            boxSize={6}
            ml={3}
          />
          <HobbieItem>Code</HobbieItem>
          <Text ml={10} fontSize={14}>
            <Link target="_blank" href={code}>
              {code.slice(8)}&nbsp;
              <ExternalLinkIcon />
            </Link>
          </Text>
        </ListItem>
      )}
      {Array.from({ length: src }).map((_, i) => (
        <Image
          key={i}
          src={`/projects/${title.toLowerCase()}${i > 0 ? i + 1 : ""}.png`}
          borderRadius="lg"
          w="full"
          h="auto"
          objectFit="cover"
          mb={4}
          mt={8}
        />
      ))}
    </List>
  </Box>
);
