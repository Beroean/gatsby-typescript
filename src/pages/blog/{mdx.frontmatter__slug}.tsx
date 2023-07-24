import * as React from "react";
import Layout from "../../components/layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Seo from "../../components/seo";
import { Frontmatter } from ".";

interface Post {
  mdx: {
    frontmatter: Frontmatter;
  };
}

const BlogPost = ({ data, children }: PageProps<Post>) => {
  const image = getImage(data.mdx.frontmatter.hero_image) as IGatsbyImageData;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={data.mdx.frontmatter.hero_image_credit_link}
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
