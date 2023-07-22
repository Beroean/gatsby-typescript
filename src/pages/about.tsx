import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const AboutPage = () => {
  const metaData = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            linkedin
          }
        }
      }
    }
  `);
  const author = metaData.site.siteMetadata?.author;
  const social = metaData.site.siteMetadata?.social;
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! My name is{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.linkedin.com/in/${social?.linkedin || ``}`}
        >
          {author.name}
        </a>
        . I'm building this website in my free time.
      </p>
      <StaticImage alt="Me" src="../images/mahmoud.jpg" layout="fullWidth" />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
