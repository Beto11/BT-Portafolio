import { Container } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Course = () => {
  return (
    <Layout title="Web Development Course">
      <Container>
        <Section>
          <ProjectItem
            title="Web Development Course"
            dateStart="August 2020"
            endDate="June 2021"
            stack="Bootstrap, jQuery"
            deployed={true}
            website="https://cca.org.mx/CCA_cursos/programacion_web/index.html"
            src={3}
          >
            <Paragraph>
              I am the <Highlight>author</Highlight> of a course for my
              college's virtual learning center, an organisation inside Tec de
              Monterrey which offers{" "}
              <Highlight>hundreds of free online courses</Highlight> to hundreds
              of thousands of students. All of the content of the course is
              written and designed by myself, which covers the basics of HTML,
              CSS, JavaScript, environment setup and deployment.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            This project helped me familiarize with popular libraries like{" "}
            <Highlight>jQuery</Highlight> and <Highlight>Bootstrap</Highlight>,
            which improved my knowledge of web development as a whole and made
            writing the course a little easier. Having the flexibility to create
            my own educational content was really fun.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Course;
