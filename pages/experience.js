import {
  Container,
  Divider,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layout/article";
import Highlight from "../components/highlight";
import {
  ExperienceItem,
  ListExperienceItem,
} from "../components/experience_item";

const Experience = () => {
  return (
    <Layout title="Experience">
      <Container>
        <Section>
          <Heading as="h2" mb={3}>
            Experience
          </Heading>
          <Divider mb={10} borderColor={useColorModeValue("black", "gray")} />
          <ExperienceItem
            company="Tecnologias Datum01"
            position="Cybersecurity Engineer"
            dateStart="January 2024"
            dateEnd="Present"
          >
            Assigned to the Microsegmentation team.
            <ListExperienceItem>
              Utilize <Highlight>Guardicore</Highlight> for precise network
              traffic microsegmentation, oversee{" "}
              <Highlight>SOC operations</Highlight> by analyzing network logs,
              provide L1 support, and enhance overall cybersecurity.
            </ListExperienceItem>
            <ListExperienceItem>
              Manage sessions with clients to address and resolve pending
              issues, ensuring client satisfaction and maintaining strong
              professional relationships.
            </ListExperienceItem>
          </ExperienceItem>
          <ExperienceItem
            company="Tecnológico de Monterrey"
            position="CyberSecurity Bootcamp"
            dateStart="August 2023"
            dateEnd="March 2024"
          >
            6-month CyberSecurity bootcamp.
            <ListExperienceItem>
              Developing skills in cybersecurity, including threat assessment,
              network security, penetration testing, server configuration,
              incident response, and data forensics.
            </ListExperienceItem>
            <ListExperienceItem>
              Utilized <Highlight>Microsoft Azure</Highlight> for cloud
              solutions and infrastructure management.
            </ListExperienceItem>
            <ListExperienceItem>
              Conducted security assessments using
              <Highlight>Kali Linux</Highlight> for penetration testing.
            </ListExperienceItem>
            <ListExperienceItem>
              Developed and automated tasks with{" "}
              <Highlight>PowerShell</Highlight> and <Highlight>Bash</Highlight>{" "}
              scripting to enhance operational efficiency.
            </ListExperienceItem>
          </ExperienceItem>
          <ExperienceItem
            company="EZI Metales"
            position="Web Development/Data Analysis"
            dateStart="July 2023"
            dateEnd="January 2024"
          >
            Assigned to the operational excellence team.
            <ListExperienceItem>
              Utilized <Highlight>Power BI</Highlight> and{" "}
              <Highlight>MySQL</Highlight> to transform intricate data into
              visual insights
            </ListExperienceItem>
            <ListExperienceItem>
              Designed full-stack <Highlight>REACT</Highlight> web applications
              to enhance data organization and address internal challenges.
            </ListExperienceItem>
          </ExperienceItem>
        </Section>
      </Container>
    </Layout>
  );
};

export default Experience;
