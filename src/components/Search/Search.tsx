import React, { ChangeEventHandler } from "react";
import { MagnifyingGlass } from "../../styles/iconography";
import { ColorTokens } from "../../tokens";
import { InputContainer, LeftSlot, Input } from "./styled";

// TODO : separate compont for input
type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchResults?: string[]; // TODO: might be with more option
};

// TODO: use ref
const Search: React.FC<Props> = ({
  placeholder = "",
  searchResults = [],
  onChange,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const hasSearchResults = !!searchResults.length;

  return (
    <div>
      <InputContainer hasSearchResults={hasSearchResults}>
        <LeftSlot>
          <MagnifyingGlass color={ColorTokens.Light.trunks} />
          <Input
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </LeftSlot>
        {/* TODO */}
        {/* This is obly when  value of Input is not empty*/}
        {/* May be replace with Cross icon */}
        {/* Eventually will a IconButton */}
        <span>clear</span>
      </InputContainer>

      {hasSearchResults && <div>TODO: Search list dropdown</div>}
    </div>
  );
};

export default Search;
