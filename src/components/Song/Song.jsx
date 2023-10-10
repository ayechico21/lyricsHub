import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Song({ songId, name, artist, imgUrl }) {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/lyrics/${songId}`)}>
      <ImageWrapper>
        <img src={imgUrl} loading="lazy" alt={`${name} thumbnail`} />
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
    transform: translateX(20px) scale(1.05);
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
  min-width: var(--size); /**clamp min image with size */
  border-radius: inherit;
  overflow: hidden;
`;
const SongInfo = styled.article`
  color: hsl(246, 41%, 31%);
  text-align: start; /**text begins from start {left} of container */
  flex: 1; /**fill up entire space, helps artist truncate for overflowing text */
  overflow: hidden; /**stop container from going out of parent container due to its content's size */
`;
const Name = styled.p`
  font-weight: 600;
`;
const Artist = styled.p`
  font-size: 0.8rem;
  width: calc(
    80%
  ); /**calc converts % value into px, text-overflow required defined width */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default Song;
