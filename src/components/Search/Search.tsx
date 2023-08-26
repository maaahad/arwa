import React, { ChangeEventHandler } from "react";
import { MagnifyingGlass } from "../../styles/iconography";
import { InputContainer, LeftSlot, Input, CloseIcon } from "./styled";
import Close from "../../styles/iconography/Close";
import { ColorTokens } from "../../tokens";

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

  const handleClear = () => {
    onChange('')
  }

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
        {/* May be replace with Cross icon */}
        {/* Eventually will a IconButton */}
        {value && (
          <CloseIcon onClick={handleClear}>
            <Close size="lg" color={ColorTokens.Light.trunks}/>
          </CloseIcon>
        )}

      </InputContainer>

      {hasSearchResults && <div>TODO: Search list dropdown</div>}
    </div>
  );
};

export default Search;
