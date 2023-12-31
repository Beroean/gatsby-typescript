import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, PageProps, Link } from "gatsby";
import { active, link } from "./index.module.css";
export interface Chart {
  data: any;
  type: string;
  config: any;
}
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
    <Layout pageTitle="Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link
                className={link}
                activeClassName={active}
                to={`/blog/${node.frontmatter.slug}`}
              >
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
