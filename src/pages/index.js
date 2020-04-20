import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  PostContainer,
  Post,
  PostTitle,
  PostBody,
  PostImage,
  PostDivider,
} from "../components/home-post"
import {
  RepoContainer,
  RepoContainerTitle,
  RepoCard,
  RepoTitle,
  RepoDescription,
  RepoLabel,
} from "../components/repo-card"

const IndexPage = ({ data }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchRepos().then(_repos => setRepos(_repos))
  }, [])

  const fetchRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/tunahanoguz/repos"
    )
    return response.json()
  }

  return (
    <Layout>
      <SEO title="Home" />

      <PostContainer>
        {data.allMarkdownRemark.edges.map(post => {
          const frontmatter = post.node.frontmatter
          let featuredImgFluid =
            post.node.frontmatter.featuredImage.childImageSharp.fluid

          {
            console.log(repos)
          }

          return (
            <>
              <Post>
                <PostImage fluid={featuredImgFluid} />

                <PostTitle key={post.node.id}>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </PostTitle>

                <PostDivider />
              </Post>
            </>
          )
        })}
      </PostContainer>

      <RepoContainer>
        <RepoContainerTitle>GitHub Repositories</RepoContainerTitle>
        {repos.map(repo => {
          const { id, name, description, language, html_url } = repo

          return (
            <RepoCard key={id}>
              <RepoTitle href={html_url}>{name}</RepoTitle>
              <RepoDescription>{description}</RepoDescription>
              <RepoLabel>{language}</RepoLabel>
            </RepoCard>
          )
        })}
      </RepoContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
