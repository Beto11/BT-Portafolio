import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Botdesaparecidx = () => {
  return (
    <Layout title="Botdesaparecidx">
      <Container>
        <Section>
          <ProjectItem
            title="BotDesaparecidx"
            dateStart="December 2019"
            dateEnd="Present"
            stack="Python, Flask, Firebase, Swift, DHTML"
            website="https://www.botdesaparecidx.com"
            code="https://github.com/luyer74/botdesaparecidx"
            src={3}
          >
            <Paragraph>
              Botdesaparecidx is a <Highlight>social media bot</Highlight>, it
              looks for tweets with keywords for missing persons posts and
              shares them. Now it has transformed into a powerful tool and
              initiative to bring attention to the tens of thousands of missing
              persons cases in México. With close to{" "}
              <Highlight>20K followers</Highlight>, it has reached{" "}
              <Highlight>millions</Highlight> of people. You can take a look at
              the main twitter account{" "}
              <Link
                href="https://twitter.com/botdesaparecidx"
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
            There are over <Highlight>70K posts</Highlight> stored in Firebase
            which will soon be used for Data Analysis. For my iOS development
            class, I started working on an app but I had to pause from working
            on it after the course was finished. Feel free to contact me if you
            want to help!
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Botdesaparecidx;
