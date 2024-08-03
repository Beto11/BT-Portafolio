import { Heading, Box, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Highlight from "./highlight";

export const ExperienceItem = ({
  children,
  dateStart,
  dateEnd,
  company,
  position,
}) => (
  <Box>
    <Heading as="h3" fontSize="28px" mb={1} mt={10}>
      {company}
    </Heading>
    <Text fontSize="20px">
      <Highlight>{position}</Highlight>{" "}
      <Text display="inline-block" fontSize="16px">
        ({dateStart} — {dateEnd})
      </Text>
    </Text>
    {children}
  </Box>
);

export const ListExperienceItem = ({ children }) => {
  return (
    <Box display="flex" mt={2}>
      <ChevronRightIcon boxSize="6" m={3} color="purple.500"></ChevronRightIcon>
      <Text fontSize="16px" ml={5}>
        {children}
      </Text>
    </Box>
  );
};
