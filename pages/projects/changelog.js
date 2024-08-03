import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Deskup = () => {
  return (
    <Layout title="ChangeLog">
      <Container>
        <Section>
          <ProjectItem
            title="ChangeLog"
            dateStart="December 2022"
            stack="MongoDB, Express, React, Node.js"
            website="https://makers-project-client.onrender.com"
            code="https://github.com/Luyer74/MakersProject"
            src={2}
          >
            <Paragraph>
              I created this app as a challenge for a fellowship I applied to.
              It is a changelog where users can create and add changes to
              different projects. I implemented <Highlight>CRUD</Highlight>{" "}
              operations in a <Highlight>REST API</Highlight> to interact with
              the projects and used <Highlight>MERN</Highlight> as my stack.
              Also, users need to be authenticated so I used{" "}
              <Highlight>JWT</Highlight> tokens for that part.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            I really liked building this even though I did it in about 3 days. I
            had used MERN in the past but this project was the first one where I
            could use it to the fullest.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Deskup;
