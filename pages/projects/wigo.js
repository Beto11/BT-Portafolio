import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Deskup = () => {
  return (
    <Layout title="Wigo">
      <Container>
        <Section>
          <ProjectItem
            title="Wigo"
            dateStart="September 2022"
            dateEnd="November 2022"
            stack="MongoDB, Express, React, Node.js"
            website="https://wigo-app.onrender.com"
            code="https://github.com/Luyer74/apolo"
            src={3}
          >
            <Paragraph>
              This was project for a small networking company. They asked for a
              simple website where users could customize different network
              packages, depending on the service they select. To build it, I
              used <Highlight>MERN</Highlight> since I wanted to practice my
              React skills. I made simple design with
              <Highlight>Figma</Highlight> and coded a small API to get the data
              to be used on the customization part.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project was great for my front-end skills, specifically React
            because I learned a lot about&nbsp;
            <Highlight>state management</Highlight>. I had initially thought it
            would be pretty easy but it got more complicated as I had to handle
            many states for the customization part.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Deskup;
