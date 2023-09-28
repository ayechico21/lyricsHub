import React from "react";
import styled from "styled-components";
import { Loader } from "react-feather";
function LoaderIcon() {
  return (
    <Icon>
      <Loader size={40} />
    </Icon>
  );
}

const Icon = styled.div`
  margin: 0 auto;
  color: hsl(246, 41%, 21%);
  animation: rotateIcon 1.5s infinite;

  @keyframes rotateIcon {
    0% {
      transform: scale(1, 1), rotate(0deg);
    }
    50% {
      transform: scale(1.5, 1.5) rotate(180deg);
    }
    100% {
      transform: scale(1, 1) rotate(360deg);
    }
  }
`;
export default LoaderIcon;
