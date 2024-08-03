import Nextlink from "next/link";
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/layout/article";
import Section from "../components/section";
import { useColorModeValue } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <Section>
        <Container>
          <Heading as="h1">Not found</Heading>
          <Text>The page you&apos;re looking for doesn&apos;t exist.</Text>
          <Divider
            mb={3}
            mt={3}
            borderColor={useColorModeValue("black", "gray")}
          />
          <Box my={6} align="center">
            <Nextlink href="/">
              <Button colorScheme="orange">Return home</Button>
            </Nextlink>
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default NotFound;
