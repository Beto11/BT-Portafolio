import { Container, Link, Box } from "@chakra-ui/react";
import { ProjectItem } from "../../components/project_item";
import Layout from "../../components/layout/article";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Highlight from "../../components/highlight";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Wine = () => {
  return (
    <Layout title="Wine Quality Modelling">
      <Container>
        <Section>
          <ProjectItem
            title="Wine Quality Modelling"
            dateStart="February 2022"
            dateEnd="June 2022"
            stack="Python, MATLAB"
            code="https://docs.google.com/document/d/1T64EPQsOBjfk6al-8v2DnE6GUloE7w3LwBR6f8PuWfs/edit?usp=sharing"
            src={0}
          >
            <Paragraph>
              As part of a Cuantitative Methods class, we were assigned to
              analyze and predict some variables from any dataset. This was a
              team project and my team chose the{" "}
              <Highlight>Wine Quality</Highlight> dataset which can be found{" "}
              <Link
                href="https://www.kaggle.com/datasets/rajyellow46/wine-quality"
                target="_blank"
                _hover={{}}
              >
                <Highlight>
                  here&nbsp;<ExternalLinkIcon></ExternalLinkIcon>
                </Highlight>
              </Link>{" "}
              . We decided to focus on the alcohol variable and found that the
              density is the property that influences this the most. With this I
              was able to build a model using{" "}
              <Highlight>Random Forests</Highlight> to predict the grade of
              alcohol. The code and complete report can be found below.
            </Paragraph>
          </ProjectItem>
          <Box mt="20px">
            <Paragraph>
              This project helped me apply a lot of the data science knowledge I
              had learned in previous classes. Since the dataset was pretty
              clean, there wasn't much to be done with the data. I think it is
              really cool how just about any set of data can tell a certain
              story or can be useful to find out things.
            </Paragraph>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Wine;
