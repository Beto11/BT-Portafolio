import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Deskup = () => {
  return (
    <Layout title="Stags">
      <Container>
        <Section>
          <ProjectItem
            title="Stags"
            dateStart="November 2020"
            stack="Node.js, Spotify API, DHTML"
            website="https://s-tags.herokuapp.com"
            code="https://github.com/Luyer74/s-tags"
            src={2}
          >
            <Paragraph>
              Stags was another project for a college course. It is a{" "}
              <Highlight>web application</Highlight> for creating playlists with
              the <Highlight>Spotify API</Highlight>. After a user logs in with
              their account, they can input a series of keywords or "tags". A
              playlist will be generated in their Spotify profile and on the app
              with a preview for each song.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project was a team project and also one of my first web
            application projects. I worked mostly on the{" "}
            <Highlight>front-end</Highlight> of the app, as well as the overall{" "}
            <Highlight>UI/UX design</Highlight>. I created the logo with{" "}
            <Highlight>Photoshop</Highlight> and did some mock-ups with{" "}
            <Highlight>Figma</Highlight>.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Deskup;
