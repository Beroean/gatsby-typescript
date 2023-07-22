import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, PageProps } from 'gatsby'

interface node {
    name: string;
}

interface DataProps {
    allFile: {
        nodes : [node]
    }

}

const BlogPage = ({data}: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
        <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      
    </Layout>
  )
}

export const query = graphql`
query BlogQuery {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage