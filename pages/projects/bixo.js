import { Container, Box } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";

const Bixo = () => {
  return (
    <Layout title="Compiler">
      <Container>
        <Section>
          <ProjectItem
            title="Bixo Compiler"
            dateStart="February 2023"
            dateEnd="May 2023"
            stack="Python"
            code="https://github.com/JCGranadosV/BIXO"
            documentation="https://github.com/JCGranadosV/BIXO/blob/main/Documentacion%20BIXO.pdf"
            src={0}
          >
            <Paragraph>
              Probably one of the hardest projects I've worked on was a
              team-based project for my Compiler Design class: my own
              programming language and <Highlight>compiler</Highlight> made
              using <Highlight>Python</Highlight>, with the purpose of
              implementing functionalities such as loops, variable creation,
              arrays, conditionals, etc., and through the lexical, syntactic,
              and semantic analyzer, its respective code generation was carried
              out to execute the project.
            </Paragraph>
          </ProjectItem>
          <Box mt="20px">
            <Paragraph>
              This project was a good summary of many Computer Science classes I
              have taken. &nbsp;
              <Highlight>
                Data Structures, Algorithms, Discrete Math, Programming
                languages
              </Highlight>
              ; I applied many concepts from each of these classes and it was
              really fascinating to see how all of them came together to build
              something so complex. If you want to read how I implemented this
              fully, there is complete documentation in the repository.
            </Paragraph>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Bixo;
