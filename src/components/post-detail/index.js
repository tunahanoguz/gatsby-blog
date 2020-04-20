import styled from "styled-components"

export const PostTitle = styled.h1`
  font-size: 26px;
  color: ${({theme}) => theme.text}
`

export const PostBody = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`
