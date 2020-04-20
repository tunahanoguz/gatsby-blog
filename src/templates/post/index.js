import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title}/>
      <h1>{frontmatter.title}</h1>
      <p>{html}</p>
    </>
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
