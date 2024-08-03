import {
  Container,
  Box,
  Divider,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layout/article";
import Highlight from "../components/highlight";
import { ChevronRightIcon } from "@chakra-ui/icons";
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
            company="Intel"
            position="Cloud Software Engineer Intern"
            dateStart="December 2021"
            dateEnd="Present"
          >
            1-year internship assigned to the Google Cloud team.
            <ListExperienceItem>
              Analyzed performance data of Google's Hyperprotobench project
              running with Control Enforcement Technology (CET) using Linux's
              perf tool.
            </ListExperienceItem>
            <ListExperienceItem>
              Built a dashboard for the project inside Intel's Services
              Framework website with Flask.
            </ListExperienceItem>
            <ListExperienceItem>
              Implemented several plots using Pandas and the visualization
              library Bokeh.
            </ListExperienceItem>
          </ExperienceItem>
          <ExperienceItem
            company="MSCI"
            position="Analytics Software Engineer Intern"
            dateStart="July 2021"
            dateEnd="December 2021"
          >
            6-month internship assigned to the Model Engineering team.
            <ListExperienceItem>
              Implemented several Azure Pipelines for building and testing a
              company web application, as well as building data models. Started
              the migration of the app to Azure with docker.
            </ListExperienceItem>
            <ListExperienceItem>
              Pushed several fixes and changes to the web app using MATLAB and
              Java.
            </ListExperienceItem>
          </ExperienceItem>
          <ExperienceItem
            company="Epicor"
            position="Web Development Intern"
            dateStart="January 2021"
            dateEnd="July 2021"
          >
            6-month internship assigned to the Web Marketing team.
            <ListExperienceItem>
              Worked with a Quality Assurance team by manually testing the new
              brand website's features and UI.
            </ListExperienceItem>
            <ListExperienceItem>
              Created and managed content for the different regions of the
              website with the company's CMS, EpiServer.
            </ListExperienceItem>
          </ExperienceItem>
        </Section>
      </Container>
    </Layout>
  );
};

export default Experience;
