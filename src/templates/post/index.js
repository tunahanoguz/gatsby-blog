import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { PostTitle, PostBody } from "../../components/post-detail"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PostTitle>{frontmatter.title}</PostTitle>
      <PostBody dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
