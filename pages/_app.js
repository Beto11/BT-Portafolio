import "@fontsource/nunito-sans/400.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
