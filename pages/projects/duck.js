import { Container } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Deskup = () => {
  return (
    <Layout title="ThreeJS Duck">
      <Container>
        <Section>
          <ProjectItem
            title="ThreeJS Duck"
            dateStart="February 2022"
            dateEnd="June 2022"
            stack="Three.Js"
            website="https://luyer74.github.io/Proyecto_Graficas/"
            code="https://github.com/Luyer74/Proyecto_Graficas"
            src={1}
          >
            <Paragraph>
              This was a project for my Computer Graphics course. It is a
              small&nbsp;
              <Highlight>3D scene</Highlight> of a duck, a barn and a pond. The
              duck can walk using WASD keys.
            </Paragraph>
          </ProjectItem>
        </Section>
      </Container>
    </Layout>
  );
};

export default Deskup;
