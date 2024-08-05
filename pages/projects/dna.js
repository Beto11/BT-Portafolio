import { Container, Link, List, ListItem } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DNA = () => {
  return (
    <Layout title="DNA-ANALYSIS">
      <Container>
        <Section>
          <ProjectItem
            title="DNA-Analysis"
            dateStart="November 2021"
            dateEnd="December 2021"
            stack="C"
            code="https://github.com/JCGranadosV/DNA-ANALYSIS"
            src={2}
          >
            <Paragraph>
              C Program that analyzes DNA samples and compares them line by line
              to a Large genome, executed as a thread, analyzing the sequence in
              parallel.
            </Paragraph>
          </ProjectItem>
          <Paragraph>
            The program has a client who interacts with the server that has 2
            main functions:
          </Paragraph>
          <List pl={5} styleType="disc">
            <ListItem>
              <Highlight>Upload_Reference:</Highlight> Uploads the main DNA
              Genome to which we will compare our DNA samples and stores it in
              main memory.
            </ListItem>
            <ListItem>
              <Highlight>Upload_Sequence:</Highlight> Uploads line by line of
              the DNA sample and compares it to the Genome, it outputs if the
              line was included, and if it was, in which position it was found.
              At the end of the iteration, the server calculates the percentage
              of sequence covered by the samples to get a match percentage.
              Finally, it displays the mapped and non-mapped sequences to the
              user.
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default DNA;
