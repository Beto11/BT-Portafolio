import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Huerto = () => {
  return (
    <Layout title="Build-A-Huerto">
      <Container>
        <Section>
          <ProjectItem
            title="Build-A-Huerto"
            dateStart="August 2021"
            dateEnd="December 2021"
            stack="PHP, Javascript, CSS, SQL"
            deployed={false}
            code="https://github.com/JCGranadosV/build-a-huerto"
            src={5}
          >
            <Paragraph>
              One of the most rewarding team projects I've worked on is{" "}
              <Highlight>Build-a-Huerto</Highlight>, a web platform designed to
              help people start and manage their own vegetable gardens.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            With this platform, users can: Track Plants: Add new plants, track
            their growth, and receive reminders on when to water them.{" "}
            <Highlight>Database Integration</Highlight>: Led the integration of
            a robust database to store and manage all plant-related data.
            User-Friendly Interface: We focused on creating an intuitive and
            smooth user experience using{" "}
            <Highlight>PHP, CSS, JavaScript, and SQL</Highlight>.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Huerto;
