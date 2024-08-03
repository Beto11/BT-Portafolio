import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container } from "@chakra-ui/react";
import Coony from "../coony";
import NoSsr from "../no-ssr.js";
import Footer from "../footer.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Luyer</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Coony></Coony>
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
