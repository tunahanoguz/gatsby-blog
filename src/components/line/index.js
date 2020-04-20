import React from "react"
import styled from "styled-components"

const Line = styled.div`
  height: 10px;
  background-color: ${({theme}) => theme.topLine};
`;

export default Line;
