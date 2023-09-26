import React from "react";

import SearchInput from "./components/SearchInput";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Lyrics from "./pages/Lyrics";

function App() {
  return (
    <Wrapper>
      <Header>
        Lyrics<HighlightText>HUB</HighlightText>
      </Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/songs" element={<Songs />} />
          <Route exact path="/lyrics" element={<Lyrics />} />
        </Routes>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/songs">songs</Link>
            </li>
            <li>
              <Link to="/lyrics">lyrics</Link>
            </li>
          </ul>
        </div>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /**center app on screen */
  padding: 10px;
  border: 2px dotted red;
`;
const Header = styled.h1`
  font-size: 2.5rem;
  color: #645caa;
`;
const HighlightText = styled.span`
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(
    45deg,
    hsla(246, 31%, 51%, 1) 0%,
    hsla(246, 31%, 53%, 1) 77%,
    hsla(0, 0%, 89%, 1) 99%
  );
`;
export default App;
