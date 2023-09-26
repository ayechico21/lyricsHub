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
  color: #645caa;
`;
const HighlightText = styled.span`
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(
    45deg,
    hsla(246, 31%, 51%, 1) 0%,
    hsla(246, 31%, 53%, 1) 77%,
    hsla(0, 0%, 89%, 1) 99%
  );
`;
export default Header;
