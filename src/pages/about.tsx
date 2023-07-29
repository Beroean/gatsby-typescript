import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import SocialIcon from "../components/socialIcon";
import { Box, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutPage = () => {
  const metaData = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            bio
          }
          social {
            linkedin
            github
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
        Hi there! My name is {author.name}. I'm a {author.bio}. I'm building
        this website in my free time.
      </p>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={"6px"}
        marginBottom={"2px"}
      >
        <SocialIcon
          label="linkedin"
          link={`https://www.linkedin.com/in/${social?.linkedin || ``}`}
          icon={<LinkedInIcon color="action" fontSize="large" />}
        />
        <SocialIcon
          label="github"
          link={`https://www.github.com/${social?.github || ``}`}
          icon={<GitHubIcon color="action" fontSize="large" />}
        />
      </Stack>
      <Box justifyContent="center" display="flex">
        <StaticImage
          alt="Me"
          src="../images/mahmoud.jpg"
          layout="constrained"
          style={{ borderRadius: "50%" }}
          width={500}
          height={500}
        />
      </Box>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
