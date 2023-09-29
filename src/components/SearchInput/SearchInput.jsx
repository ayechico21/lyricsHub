import React from "react";
import styled from "styled-components";
import { Search } from "react-feather";
import { useNavigate } from "react-router-dom";
function SearchInput() {
  const [songInput, setSongInput] = React.useState("");
  const navigate = useNavigate("");
  const handleSubmit = async (e) => {
    e.preventDefault(); /**prevent default page reload */
    navigate(`/lyricsHub/${songInput}`, {
      state: songInput,
    }); /**route to songs page */
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="song-input">Search</Label>
      <InputWrapper>
        <Input
          id="song-input"
          type="text"
          required
          value={songInput}
          onChange={(e) => setSongInput(e.target.value)}
          placeholder="Search your Song"
        />
        <SearchButton>
          <Icon>
            <Search />
          </Icon>
        </SearchButton>
      </InputWrapper>
    </Form>
  );
}
const Form = styled.form`
  align-self: stretch; /**make child take full height of flex parent   */
  flex-basis: 50%; /**child tries to make width 50% of total flex parent width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    45deg,
    hsla(246, 31%, 53%, 1) 0%,
    hsla(246, 31%, 51%, 1) 45%,
    hsla(0, 0%, 89%, 1) 100%
  );
  min-width: 0;
  border-radius: 10px;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 2rem;
  color: hsl(0, 0%, 100%);
`;
const InputWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px 10px;
  width: 80%;
  height: 50px;
  border-radius: 25px;
  background: hsl(246, 31%, 92%);
`;
const Input = styled.input`
  border: none;
  background: inherit;
  min-width: 0;
  width: 100%;
  padding: 0 10px;
  font-weight: 600;
  font-size: 1.4rem;
  color: hsl(246, 41%, 21%);
  outline: none;
  &::placeholder {
    font-size: 1rem;
  }
`;
const SearchButton = styled.button`
  --size: 40px;
  height: var(--size);
  width: var(--size);
  cursor: pointer;
  text-align: center;
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: 50%; /**circular corners, need equal height and width */

  /**same as container gradient {Form} */
  background: linear-gradient(
    45deg,
    hsla(246, 31%, 53%, 1) 0%,
    hsla(246, 31%, 51%, 1) 75%,
    hsla(0, 0%, 89%, 1) 100%
  );

  /**center icon inside the button */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.span`
  transition: All 0.5s;
  &:hover {
    transform: scale(1.2) rotate(360deg);
  }
`;
export default SearchInput;
