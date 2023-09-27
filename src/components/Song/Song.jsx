import React from "react";
import styled from "styled-components";

function Song({ name, artist, imgUrl }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imgUrl} alt={`${name} thumbnail`} />
      </ImageWrapper>
      <SongInfo>
        <Name>{name}</Name>
        <Artist>{artist}</Artist>
      </SongInfo>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  border: 2px dotted blue;
`;
const ImageWrapper = styled.div`
  --size: 50px;
  height: var(--size);
  width: var(--size);
`;
const SongInfo = styled.article``;
const Name = styled.p``;
const Artist = styled.p`
  font-size: 0.8rem;
`;
export default Song;
