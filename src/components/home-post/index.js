import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

export const PostContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
  @media only screen and (max-width: 575px){
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media only screen and (min-width: 576px) and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media only screen and (min-width: 769px) and (max-width: 991px){
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media only screen and (min-width: 991px) and (max-width: 1199px){
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media only screen and (min-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Post = styled.article`
  height: 100%;
`

export const PostTitle = styled.h1`
  font-size: 20px;
  margin: 0 0 10;
  padding: 0;

  a {
    color: ${({ theme }) => theme.text};
  }
`

export const PostBody = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`

export const PostImage = styled(Img)`
  max-height: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const PostDivider = styled.div`
  height: 0;
  background-color: ${({theme}) => theme.divider};
  border-radius: 100px;
  
  @media only screen and (max-width: 575px){
    height: 2px;
  }
`
