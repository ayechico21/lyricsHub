import React from "react";

import SearchInput from "./components/SearchInput";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header>LyricsHUB</Header>
      <SearchInput />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /**center app on screen */
  padding: 10px;
  border: 2px dotted red;
`;
const Header = styled.h1`
  font-size: 2.5rem;
`;

export default App;
