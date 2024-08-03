import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Botdesaparecidx = () => {
  return (
    <Layout title="Kochrennen">
      <Container>
        <Section>
          <ProjectItem
            title="Kochrennen"
            dateStart="January 2020"
            dateEnd="June 2020"
            stack="Unity, C#"
            code="https://github.com/Luyer74/pixies-videogame"
            src={2}
          >
            <Paragraph>
              Kochrennen is a <Highlight>2D videogame</Highlight> inspired on
              the popular cooking game Overcooked. It was created for my
              Videogame Development class in college. The game has simple{" "}
              <Highlight>pixel art</Highlight> style and an endless type of
              gameplay where you play as a chef completing several orders that
              appear on the screen. You can download the game&nbsp;
              <Link
                href="https://1drv.ms/u/s!AtmH5KNROUqIgrMl5UGhnnN7VizwPw?e=1dAKzg"
                target="_blank"
                _hover={{}}
              >
                <Highlight>
                  here&nbsp;<ExternalLinkIcon></ExternalLinkIcon>
                </Highlight>
              </Link>
              .
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project made me realize that{" "}
            <Highlight>Game Development</Highlight> is really difficult and
            requires knowledge of many other areas aside programming. For this
            project I worked on a lot of things, I made all of the pixel art
            myself, the level and gameplay design, animations and coded most of
            the level interactions.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Botdesaparecidx;
