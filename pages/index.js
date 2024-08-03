import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  List,
  ListItem,
  Icon,
  Link,
} from "@chakra-ui/react";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layout/article";

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Section delay={0.1}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading
                as="h1"
                variant="page-title"
                mb={2}
                textAlign={{ base: "center", md: "left" }}
              >
                Hi, I'm{" "}
                <Text display="inline" color="purple.500">
                  Beto
                </Text>
              </Heading>
              <Text fontSize="20px" textAlign={{ base: "center", md: "left" }}>
                Software Engineer, CyberSecurity Enthusiast
              </Text>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 3, md: "0px" }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="purple.500"
                borderWidth={3}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/pp.jpeg"
              />
            </Box>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box align="center" my={4}>
            <NextLink href="/about" scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="purple"
                letterSpacing="tighter"
              >
                Get to know me
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box
            background={useColorModeValue("beige", "whiteAlpha.300")}
            p={5}
            mt={8}
            borderRadius={20}
            boxShadow="lg"
          >
            <Heading as="h3" size={"md"} mb={1}>
              Contact
            </Heading>
            <Divider
              mb={3}
              borderColor={useColorModeValue("black", "gray")}
              width="50%"
            />
            <List>
              <ListItem>
                <Link
                  href="https://github.com/Beto11"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="purple"
                    leftIcon={<Icon as={SiGithub} />}
                  >
                    Beto11
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="mailto:betotrevino@live.com.mx"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="purple"
                    leftIcon={<Icon as={EmailIcon} />}
                  >
                    betotrevino@live.com.mx
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/albertotrevino11/"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="purple"
                    leftIcon={<Icon as={SiLinkedin} />}
                  >
                    /albertotrevino11
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.instagram.com/beto.trev/"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="purple"
                    leftIcon={<Icon as={SiInstagram} />}
                  >
                    @beto.trev
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
