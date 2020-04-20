import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 36%;
  margin: 0 auto;
  padding: 60px 0;
  
  @media only screen and (max-width: 575px){
    width: 90%;
  }
  
  @media only screen and (min-width: 576px) and (max-width: 768px){
    width: 80%;
  }
  
  @media only screen and (min-width: 769px) and (max-width: 991px){
    width: 80%;
  }
  
  @media only screen and (min-width: 991px) and (max-width: 1199px){
    width: 80%;
  }
  
  @media only screen and (min-width: 1200px) and (max-width: 1399px){
    width: 70%;
  }
  
  @media only screen and (min-width: 1400px) and (max-width: 1599px){
    width: 50%;
  }
  
  @media only screen and (min-width: 1600){
    width: 36%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-color: #E11E3C;
  color: white;
  border-radius: 100px;
  transition: transform .8s ease-in-out;
  
  :hover {
    transform: rotate(360deg);
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
