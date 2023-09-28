import React from "react";
import styled from "styled-components";
import { ArrowLeftCircle } from "react-feather";
import LoaderIcon from "../components/LoaderIcon";
import { useNavigate, useParams } from "react-router-dom";
import { searchLyrics } from "../utils";
import parse from "html-react-parser";
function Lyrics() {
  const [lyrics, setLyrics] = React.useState("");
  const { songId } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    /**lyrics are in htmlString format */
    const fetchLyrics = async () => {
      const result = await searchLyrics(songId);
      /**wait 2 sec for lyrics to show up */
      /* setTimeout(() => {
        setLyrics(result);
      }, 2000); */
      setLyrics(result);
    };
    fetchLyrics();
  }, [songId]);

  return (
    <Wrapper>
      <ReturnButton
        onClick={() => {
          /**go back to previous page */
          navigate(-1);
        }}
      >
        <ArrowLeftCircle size={32} />
      </ReturnButton>
      {!lyrics && (
        <LoadWrapper>
          <LoaderIcon />
        </LoadWrapper>
      )}
      {lyrics && <LyricsWrapper>{parse(lyrics)}</LyricsWrapper>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%; /**take the entire container width */
  display: flex;
`;

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
  &:hover {
    animation: upDownRotate 2s infinite;
  }
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
`;

const LoadWrapper = styled.section`
  flex: 1; /**take as much space as possible */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LyricsWrapper = styled.article`
  margin: 0 auto; /**center self within the container */
  color: hsl(246, 41%, 21%);
  text-align: center;
  & span {
    padding: 5px 10px;
    color: hsl(0, 0%, 100%);
    background: linear-gradient(
      45deg,
      hsl(246, 31%, 41%) 80%,
      hsl(0, 0%, 79%) 100%
    );
    border-radius: 5px;
  }
  flex: 1; /**take up as much space as possible of the container */
  overflow: hidden scroll; /**scroll bar in y direction */

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: hsl(246, 31%, 75%); /* color of the tracking area */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(246, 31%, 61%); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    &:hover {
      background-color: hsl(246, 31%, 41%);
    }
  }
  scroll-behavior: smooth;
`;
export default Lyrics;
