import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Title>
      Lyrics<HighlightText>HUB</HighlightText>
    </Title>
  );
}

const Title = styled.h1`
  font-size: 2.5rem;
  color: hsl(246, 41%, 41%);
`;
const HighlightText = styled.span`
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
  color: white;
  background: hsl(246, 31%, 51%);
`;
export default Header;
