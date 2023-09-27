import React from "react";
import styled, { keyframes } from "styled-components";
import SearchInput from "../components/SearchInput";
import { Loader } from "react-feather";
import { useParams } from "react-router-dom";
import { searchSong } from "../utils";
import SongListView from "../components/SongListView";
function Songs() {
  const [songList, setSongList] = React.useState([]);
  const { songInput } = useParams(); /**searched Song Name*/

  /**fetch song list using api */
  const fetchSongList = async () => {
    const result = await searchSong("hello");
    /**wait 2 seconds before setting songList */
    setTimeout(() => {
      setSongList(result);
    }, 2000);
  };

  React.useEffect(() => {
    console.log("useEffect");
    fetchSongList();
  }, []);

  return (
    <Wrapper>
      <SearchInput />
      {/**if songList not found */}
      {!songList && <div>Error</div>}
      {/**While songList is being fetched */}
      {songList && songList.length < 1 && (
        <Icon>
          <Loader size={40} />
        </Icon>
      )}
      {/**songList fetched, show songs */}
      {songList && songList.length > 0 && <SongListView songList={songList} />}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  align-items: center; /**vertically align items at center of container */
  gap: 20px;
  width: 100%; /**fill the container */
`;
const rotateIcon = keyframes`
0%{
    transform: scale(1,1), rotate(0deg);
   }
50%{
  transform:scale(1.5, 1.5) rotate(180deg);
}
100%{
    transform:scale(1,1) rotate(360deg);
   }`;
const Icon = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: hsl(246, 41%, 21%);
  animation: ${rotateIcon} 1.5s linear infinite;
`;

export default Songs;
