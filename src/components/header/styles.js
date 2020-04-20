import styled from "styled-components"

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

export const Description = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.siteDescription};
  margin-top: 10px;
`;
