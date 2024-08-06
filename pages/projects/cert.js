import { Container, Divider, useColorModeValue } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Highlight from "../../components/highlight";
import {
  ExperienceItem,
  ListExperienceItem,
} from "../../components/experience_item";

const Certification = () => {
  return (
    <Layout title="Certifications">
      <Container>
        <ProjectItem title="Certifications"></ProjectItem>
        <Section>
          <Divider mb={10} borderColor={useColorModeValue("black", "gray")} />
          <ExperienceItem
            company="Guardicore"
            position="Cybersecurity"
            dateStart="2024"
            dateEnd="2027"
          >
            <ListExperienceItem>
              <Highlight>GCSA</Highlight>
              <br></br> Guardicore Certified Segmentation Administrator
              <br></br> (January 31 2024 - January 30 2027)
            </ListExperienceItem>
            <ListExperienceItem>
              <Highlight>GCSE</Highlight> <br></br>Guardicore Certified
              Segmentation Engineer <br></br>
              (February 8 2024 - February 7 2027)
            </ListExperienceItem>
            <ListExperienceItem>
              <Highlight>Image and Video Manager</Highlight>
              <br></br> (June 2024 - June 2027)
            </ListExperienceItem>
          </ExperienceItem>
          <ExperienceItem
            company="CompTIA"
            position="In progress. . ."
            dateStart="tbd"
            dateEnd="tbd"
          >
            Reviewing topics to take one the following: Security+, Linux+,
            Cloud+, Server+, or Network+
            <ListExperienceItem>In Progress . . .</ListExperienceItem>
          </ExperienceItem>
        </Section>
      </Container>
    </Layout>
  );
};

export default Certification;
