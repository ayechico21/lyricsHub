import React from "react";
import { options, BASE_URL, searchSong, searchLyrics } from "../../constants";

function SearchInput() {
  const [songInput, setSongInput] = React.useState("");
  const [songLyrics, setSongLyrics] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const songs = await searchSong(songInput);
    console.log(songs);
    const id = songs[0].result.id;
    const lyrics = await searchLyrics(id);
    console.log(lyrics);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={songInput}
          onChange={(e) => setSongInput(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchInput;
