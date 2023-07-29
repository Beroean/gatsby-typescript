import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Box } from "@mui/material";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p style={{ marginBottom: "6px" }}>
        Welcome to my personal website. I am using this website as a way to
        experiment with new changes in the web development world outside of
        work. I will also be posting occassional blog posts on topics that
        interest me along with accompanying charts and data visualizations. The
        picture below{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://unsplash.com/@dabbas"}
        >
          (credit)
        </a>{" "}
        is the Aleppo Citadel throne room chandelier.
      </p>
      <Box justifyContent="center" display="flex">
        <StaticImage
          alt="The chandelier in the throne room of Aleppo Citadel"
          src="../images/chandelier.jpg"
        />
      </Box>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
