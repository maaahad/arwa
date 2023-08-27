import React from "react";
import { MagnifyingGlass } from "../../styles/iconography";
import {
  SearchStyled,
  InputContainer,
  LeftSlot,
  Input,
  CloseIcon,
  DropdownContainer,
  DropdownItem,
} from "./styled";
import Close from "../../styles/iconography/Close";
import { ColorTokens } from "../../tokens";
import { ResponsivePropDecleration } from "../../styles/responsiveness/types";

type SearchHint = Partial<Record<any, any>> & {
  label: string;
};

// TODO : separate compont for input
type Props = Pick<ResponsivePropDecleration, "width"> & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchHints?: SearchHint[];
  onSelectSearchOption?: (hint: SearchHint) => void;
};

const Dropdown: React.FC<
  Pick<Props, "searchHints" | "onSelectSearchOption">
> = ({ searchHints = [], onSelectSearchOption = () => {} }) => {
  return (
    <DropdownContainer>
      {/* TODO: should be customizable */}
      <DropdownItem selectable={false}>
        Results: {searchHints.length}
      </DropdownItem>
      {searchHints.map(({ label }, index) => (
        <DropdownItem
          onClick={() => onSelectSearchOption(searchHints[index])}
          key={`${index}_${label}`}
        >
          {label}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

// TODO: use ref
const Search: React.FC<Props> = ({
  placeholder = "",
  searchHints = [],
  onChange,
  value,
  onSelectSearchOption,
  width,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  const hasSearchResults = !!searchHints.length;

  return (
    <SearchStyled width={width}>
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
        {/* Eventually will be a IconButton */}
        {value && (
          <CloseIcon onClick={handleClear}>
            <Close size="lg" color={ColorTokens.Light.trunks} />
          </CloseIcon>
        )}
      </InputContainer>

      {hasSearchResults && (
        <Dropdown
          searchHints={searchHints}
          onSelectSearchOption={onSelectSearchOption}
        />
      )}
    </SearchStyled>
  );
};

export default Search;
