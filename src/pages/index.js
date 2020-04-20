import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      {data.allMarkdownRemark.edges.map(post => {
        const frontmatter = post.node.frontmatter
        return (
          <h1 key={post.node.id}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </h1>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
