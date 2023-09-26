import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Lyrics from "./pages/Lyrics";
import Header from "./components/Header";
import MainPageLayout from "./components/MainPageLayout/MainPageLayout";

function App() {
  return (
    <Wrapper>
      <Header />
      <MainPageLayout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/songs" element={<Songs />} />
            <Route exact path="/lyrics" element={<Lyrics />} />
          </Routes>
          {/* <div className="list">
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
          </div> */}
        </Router>
      </MainPageLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /**center app on screen */
  padding: 20px 10px;
  height: 100%;
  border: 2px dotted red;
`;

export default App;
