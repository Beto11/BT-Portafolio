import { Container, Link, Box } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Luyer = () => {
  return (
    <Layout title="Compiler">
      <Container>
        <Section>
          <ProjectItem
            title="Luyer Compiler"
            dateStart="August 2022"
            dateEnd="November 2022"
            stack="Python"
            code="https://github.com/Luyer74/Compilador"
            src={0}
          >
            <Paragraph>
              Probably one of the hardest projects I've worked on: my own
              programming language and <Highlight>compiler</Highlight> . This
              was an individual project for my Compiler Design class. I defined
              and programmed my own tokens and grammar, using the library{" "}
              <Highlight>LARK</Highlight> for lexical, syntax and semantic
              analysis. Then, using plain Python I created a simple{" "}
              <Highlight>Virtual Machine</Highlight> which takes a Memory
              structure I defined to execute any code file in my language. The
              code for this project can be seen in the link below, as well
              instructions and documentation to write your own Luyer programs.
              Keep in mind that it is in Spanish, since the class was in this
              language.
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

export default Luyer;
