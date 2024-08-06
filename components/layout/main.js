import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Coony from "../coony";
import NoSsr from "../no-ssr";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beto</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Coony />
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
};

export default Main;
