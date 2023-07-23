import * as React from "react";
import Layout from "../../components/layout";
import { graphql, PageProps } from "gatsby";
import Seo from "../../components/seo";
import { Frontmatter } from ".";

interface Post {
  mdx: {
    frontmatter: Frontmatter;
  };
}

const BlogPost = ({ data, children }: PageProps<Post>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
