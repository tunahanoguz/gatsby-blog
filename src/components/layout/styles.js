import styled from "styled-components"

export const Main = styled.main`
  width: 36%;
  margin: 0 auto;
  
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
