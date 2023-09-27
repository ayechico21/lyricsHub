import React from "react";
import styled from "styled-components";

function MainPageLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.main`
  --space: 25px;

  flex-grow: 1; /**take the remaining space on screen */
  display: flex;
  width: 100%; /**take all width space */
  height: 80%;
  max-width: 1000px; /**clamp container width */
  padding: var(--space);
  margin-top: var(--space);
  margin-bottom: calc(var(--space) * 2);
  border-radius: 20px;
  background: hsl(246, 31%, 92%);
  border: 2px solid hsl(246, 31%, 42%);
  box-shadow: 5px 5px hsl(246, 57%, 80%);
`;
export default MainPageLayout;
