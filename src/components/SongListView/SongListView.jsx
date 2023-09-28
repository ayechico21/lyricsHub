import React from "react";
import styled from "styled-components";
import Song from "../Song";

function SongListView({ songList }) {
  return (
    <Wrapper>
      <HighLightText>Results...</HighLightText>
      {songList.map((song) => {
        const { id, title, artist_names, song_art_image_thumbnail_url } =
          song.result;
        return (
          <Song
            key={id}
            songId={id}
            name={title}
            artist={artist_names}
            imgUrl={song_art_image_thumbnail_url}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-grow: 1; /**take as much row space as possible */
  align-self: stretch; /**fill container height */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HighLightText = styled.h3`
  color: hsl(246, 41%, 31%);
`;

export default SongListView;
