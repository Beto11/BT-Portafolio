import { motion } from "framer-motion";
import Head from "next/head";
import PropTypes from "prop-types";
import { GridItemStyle } from "../grid-item";

const variants = {
  hidden: { opacity: 0, x: 20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 },
};

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 1.0, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Beto</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
