import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Box } from "@mui/material";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <body style={{ marginBottom: "6px" }}>
        Welcome to my personal website. I am using this website as a way to
        experiment with new changes in the web development world outside of
        work. I will also be posting occassional blog posts on topics that
        interest me along with accompanying charts and data visualizations. The
        midjourney AI generated the image below for me after I asked it to draw
        a bazaar in my home city of Aleppo.
      </body>
      <Box justifyContent="center" display="flex">
        <StaticImage
          alt="An AI generated picture of a bazaar during ramadan in my home city"
          src="../images/bazaar.png"
          layout="constrained"
          width={500}
          height={500}
        />
      </Box>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
