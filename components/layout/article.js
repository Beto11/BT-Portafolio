import { motion } from "framer-motion";
import Head from "next/head";
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
      trainsition={{ duration: 1.0, type: "easeInOut" }}
      style={{ positon: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Beto</title>
          </Head>
        )}
        {children}
        <GridItemStyle></GridItemStyle>
      </>
    </motion.article>
  );
};

export default Layout;
