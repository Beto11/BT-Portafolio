import { Container } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Wigo = () => {
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
              packages, depending on the service they select. I utilized{" "}
              <Highlight>REACT</Highlight> since i wanted to improve on my
              skills and found it as a great web oportunity.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project was great for my front-end skills, specifically React
            because I learned a lot about&nbsp;
            <Highlight>state management</Highlight>. Although it seemed easy the
            vast amount of stated made it complicated to handle.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Wigo;
