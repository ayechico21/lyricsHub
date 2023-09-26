import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <SearchInput />
      <Intro>Get lyrics in seconds...</Intro>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center; /**vertically align items at center of container */
  width: 100%; /**fill the container */
  border: 2px dotted red;
`;
const Intro = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 10px;
  color: hsl(246, 41%, 41%);
  font-size: 1.3rem;
  font-weight: 600;
  background: hsl(246, 31%, 75%);
`;
export default Home;
