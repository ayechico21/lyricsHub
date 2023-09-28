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
      setTimeout(() => {
        setLyrics(result);
      }, 2000);
      console.log(result);
    };
    fetchLyrics();
  }, [songId]);

  return (
    <Wrapper>
      <ReturnButton onClick={() => {}}>
        <ArrowLeftCircle size={32} />
      </ReturnButton>
      {!lyrics && (
        <LoadWrapper>
          <LoaderIcon />
        </LoadWrapper>
      )}
      {lyrics && <div>{parse(lyrics)}</div>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%; /**take the entire container width */
  display: flex;
  border: 2px dotted green;
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
export default Lyrics;
