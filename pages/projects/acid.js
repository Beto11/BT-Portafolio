import { Container, Link } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Acid = () => {
  return (
    <Layout title="ChangeLog">
      <Container>
        <Section>
          <ProjectItem
            title="Acid Neutralization Simulator App"
            dateStart="March 2023"
            stack="Unity, C#"
            code="https://github.com/EmilianoAncer/simulador-de-neutralizacion-de-acidos"
            src={2}
          >
            <Paragraph>
              For a team-based project, we developed an app for a middle school
              chemistry class to simulate{" "}
              <Highlight>acid neutralization</Highlight>. The app starts with
              the basics, detailing the materials needed, and guides students
              through the process of neutralizing an acid. Students can choose
              the <Highlight>quantity of acid </Highlight>and the required
              amount of water to neutralize it, making the learning process
              interactive and engaging.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            The main purpose of our app is to provide a safe and educational way
            for kids to learn about acid neutralization without needing to be in
            a lab. It allows students to experiment and understand the concepts
            in a <Highlight>risk-free</Highlight> environment, enhancing their
            learning experience while ensuring safety.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Acid;
