import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 36%;
  margin: 0 auto;
  padding: 40px 0;
  
  @media only screen and (max-width: 375px){
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 22px;
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
`;

export const Description = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.siteDescription};
  margin-top: 10px;
`;

export const ThemeButton = styled.button`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  
  :hover {
    opacity: 0.6;
  }
`;
