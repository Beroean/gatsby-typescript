import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="An AI generated picture of a bazaar during ramadan in my home city"
        src="../images/bazaar.png"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
