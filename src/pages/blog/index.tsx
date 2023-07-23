import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, PageProps, Link } from "gatsby";

export interface Frontmatter {
  date: string;
  title: string;
  slug: string;
}
interface Node {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
}

interface DataProps {
  allMdx: {
    nodes: [Node];
  };
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
