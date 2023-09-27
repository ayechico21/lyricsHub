import React from "react";
import styled from "styled-components";

function SongListView({ songList }) {
  console.log(songList);
  return (
    <Wrapper>
      <HighLightText>Results...</HighLightText>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  flex-grow: 1; /**take as much row space as possible */
  align-self: stretch; /**fill container height */

  display: flex;
  flex-direction: column;
`;

const HighLightText = styled.h3`
  color: hsl(246, 41%, 31%);
`;

export default SongListView;
