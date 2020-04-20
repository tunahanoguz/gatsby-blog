import styled from "styled-components"

export const RepoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 100%;
  margin: 30px 0 0;
  padding: 30px 0;
  
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

export const RepoContainerTitle = styled.h3`
  font-size: 36px;
  color: ${({ theme }) => theme.text};
`

export const RepoCard = styled.div`
  padding: 20px;
  background-color: ${({theme}) => theme.repoCard};
  font-family: "Inter", sans-serif;
  border-radius: 10px;
`

export const RepoTitle = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`

export const RepoDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

export const RepoLabel = styled.span`
  padding: 6px;
  background-color: #2F4464;
  font-size: 12px;
  color: white;
  border-radius: 6px;
`
