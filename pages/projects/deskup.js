import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Deskup = () => {
  return (
    <Layout title="Desk-Up">
      <Container>
        <Section>
          <ProjectItem
            title="Desk-Up"
            dateStart="July 2021"
            dateEnd="August 2021"
            stack="Node.js, MongoDB, Express, EJS"
            deployed={false}
            code="https://github.com/Luyer74/Proyecto-Final-Web"
            src={2}
          >
            <Paragraph>
              Desk-Up was my final project for my Web Development course in
              college. It is a <Highlight>web application</Highlight> for
              storing products used in desk setups. After{" "}
              <Highlight>authenticating</Highlight>, a user can create several
              lists by selecting products from a catalog stored in a database.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project was my introduction to{" "}
            <Highlight>back-end development</Highlight>. It helped me understand
            how data can be accessed by the user through{" "}
            <Highlight>API's</Highlight>.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Deskup;
