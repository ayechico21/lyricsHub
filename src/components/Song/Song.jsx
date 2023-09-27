import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Song({ songId, name, artist, imgUrl }) {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/lyrics/${songId}`)}>
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

const Wrapper = styled.button`
  display: flex;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    hsla(0, 0%, 79%, 1) 50%,
    hsla(246, 31%, 65%, 1) 90%
  );
  border: 2px solid transparent;
  transition: All 0.5s;
  &:hover {
    border: 2px solid hsl(246, 31%, 55%);
    transform: scale(1.05);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s Linear;
`;

const ImageWrapper = styled.div`
  --size: 50px;
  height: var(--size);
  width: var(--size);
  border-radius: inherit;
  overflow: hidden;
`;
const SongInfo = styled.article`
  color: hsl(246, 41%, 31%);
  text-align: start; /**text begins from start {left} of container */
`;
const Name = styled.p`
  font-weight: 600;
`;
const Artist = styled.p`
  font-size: 0.8rem;
`;
export default Song;
