import React from "react";
import styled from "styled-components";
import { ArrowLeftCircle } from "react-feather";
function Lyrics() {
  return (
    <Wrapper>
      <ReturnButton>
        <ArrowLeftCircle size={32} />
      </ReturnButton>
    </Wrapper>
  );
}
const Wrapper = styled.section``;
const ReturnButton = styled.button`
  --size: 45px;
  height: var(--size);
  width: var(--size);
  text-align: center;
  color: hsl(246, 41%, 31%);
  background: hsl(246, 31%, 90%);
  border: none;
  cursor: pointer;
  border-radius: 50%;

  @keyframes upDownRotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(45deg) scale(1.2);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    75% {
      transform: rotate(-45deg) scale(1.2);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  &:hover {
    animation: upDownRotate 2s infinite;
  }
`;
export default Lyrics;
