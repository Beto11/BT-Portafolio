import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import DnaAnalysis from "../public/projects/dna-analysis.png";
import Wine from "../public/projects/wine.jpg";
import Bixo from "../public/projects/bixo.png";
import Wigo from "../public/projects/wigo.png";
import Acid from "../public/projects/Acid Neutralization Simulator App.png";
import Huerto from "../public/projects/build-a-huerto.png";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layout/article";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Box>
          <Section>
            <Heading mb={3}>Projects</Heading>
            <Divider mb={3} borderColor={useColorModeValue("black", "gray")} />
            <Text fontSize={20} mb={3}>
              Here is a list of my most relevant projects I've worked on during
              college or personal time.
            </Text>
          </Section>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="certification"
                title="Certifications"
                thumbnail={Bixo}
              >
                Here are some of the certifications I have earned, demonstrating
                my commitment to continuous learning and professional
                development
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="bixo" title="Bixo Compiler" thumbnail={Bixo}>
                Created a programming language and compiler, Bixo, in
                collaboration with a partner as part of a team-based project.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="wine"
                title="Wine Quality Modelling"
                thumbnail={Wine}
              >
                Data analysis project to predict wine quality using machine
                learning.
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                id="wigo"
                title="Wigo Web Application"
                thumbnail={Wigo}
              >
                Simple web application for a small networking company.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="dna"
                title="DNA-Analysis"
                thumbnail={DnaAnalysis}
              >
                C Program that analyzes DNA samples
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="acid"
                title="Acid Neutralization Simulator"
                thumbnail={Acid}
              >
                Built a simple Unity application for a middle school for them to
                practice a lab.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="huerto"
                title="Build-a-Huerto"
                thumbnail={Huerto}
              >
                Built a web platform designed to help people start and manage
                their own vegetable gardens with PHP, CSS and JavaScript.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Projects;
