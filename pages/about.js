import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Divider,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Highlight from "../components/highlight";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { HobbieItem } from "../components/hobbie_item";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiGit,
  SiFlask,
  SiLinux,
  SiMongodb,
  SiMicrosoftazure,
  SiFigma,
  SiSwift,
  SiPandas,
  SiScikitlearn,
  SiExpress,
  SiFirebase,
  SiReact,
  SiDocker,
  SiSqlite,
  SiJava,
  SiJquery,
  SiPostgresql,
} from "react-icons/si";
import Section from "../components/section";
import Layout from "../components/layout/article";

const About = () => {
  return (
    <Layout title="About">
      <Container>
        <Section delay={0.1}>
          <Box>
            <Heading as="h2" mb={1}>
              About me
            </Heading>
            <Divider mb={3} borderColor={useColorModeValue("black", "gray")} />
            <Paragraph>
              I am a Software Engineer and Computer Science graduate from TEC de
              Monterrey based in <Highlight> Nuevo Leon, México</Highlight>,
              currently working at <Highlight>Datum01</Highlight> in the
              Microsegmentation team. I am passionate about writing high quality
              and impactful code, at work and on my own projects. I've mainly
              worked on web applications (fullstack), database, and some
              CyberSecurity tools. Outside of work, I enjoy gaming, working out
              and traveling.
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/projects" scroll={false}>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="purple"
                  letterSpacing="tighter"
                >
                  My Projects
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box>
            <Heading as="h3" size={"lg"} mt={10} mb={1}>
              Hobbies
            </Heading>
            <Divider
              mb={3}
              borderColor={useColorModeValue("black", "gray")}
              width="50%"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem color="purple.500">Gaming</HobbieItem>
                <br></br> I play a variety of the popular games such as LoL,
                CSGO, Fortnite and multiplayer ones.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem>Cats</HobbieItem> <br></br> I have a 2 year old
                orange tabby named Benito, who is the inspiration of the 3d
                model of this website! I also recently adopted a tabby point
                siamese who was found on the street.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem>Violin</HobbieItem> <br></br> I started playing when
                I was 15 years old. I play pretty decent but practice very
                little nowadays.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem>Music</HobbieItem> <br></br> I enjoy a wide variety
                of music, but I specially like alt rock and classical music.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem>Chess</HobbieItem> <br></br> I play a lot of online
                chess. You can find me on&nbsp;
                <a
                  href="https://www.chess.com/member/luisyerik"
                  target={"_blank"}
                >
                  <Text display={"inline"} textDecoration="underline">
                    chess.com
                  </Text>
                  .
                </a>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={ChevronRightIcon}
                  color="purple.500"
                  boxSize={6}
                />
                <HobbieItem>Gym</HobbieItem> <br></br> I've been working out a
                lot these past few months, mainly weightlifting.
              </ListItem>
            </List>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Box>
            <Heading as="h3" size={"lg"} mt={10} mb={1}>
              Skills
            </Heading>
            <Divider
              mb={3}
              borderColor={useColorModeValue("black", "gray")}
              width="50%"
            />
            <SimpleGrid columns={3}>
              <Box>
                <List>
                  <Text>Comfortable with</Text>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiHtml5}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    HTML
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiCss3}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    CSS
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiJavascript}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    JavaScript
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiPython}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Python
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiReact}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    React
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiDocker}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Docker
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiMongodb}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    MongoDB
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiCplusplus}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    C++
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiGit}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Git
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiFlask}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Flask
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiLinux}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Linux
                  </ListItem>
                </List>
              </Box>
              <Center mt={8} height="90%">
                <Divider
                  orientation="vertical"
                  borderColor={useColorModeValue("black", "gray")}
                />
              </Center>
              <Box>
                <List>
                  <Text>Have worked with</Text>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiMicrosoftazure}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Azure
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiPostgresql}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    PostgreSQL
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiSwift}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Swift
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiFirebase}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Firebase
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiExpress}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Express
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiPandas}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Pandas
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiScikitlearn}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Scikitlearn
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiJava}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Java
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiJquery}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    jQuery
                  </ListItem>
                  <ListItem mt={3}>
                    <ListIcon
                      as={SiFigma}
                      color="purple.500"
                      boxSize={6}
                    ></ListIcon>
                    Figma
                  </ListItem>
                </List>
              </Box>
            </SimpleGrid>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default About;
