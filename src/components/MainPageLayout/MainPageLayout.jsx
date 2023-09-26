import React from "react";
import styled from "styled-components";

function MainPageLayout({ children }) {
  return (
    <Wrapper>
      <div>Main page Layoyt</div>
      {children}
    </Wrapper>
  );
}
const Wrapper = styled.main`
  --space: 25px;

  flex-grow: 1; /**take the remaining space on screen */
  display: flex;
  width: 100%; /**take all width space */
  max-width: 800px; /**clamp container width */
  padding: var(--space);
  margin-top: var(--space);
  margin-bottom: calc(var(--space) * 2);
  border: 4px solid green;
  border-radius: 20px;
`;
export default MainPageLayout;
