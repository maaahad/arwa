import React from "react";
import { MagnifyingGlass } from "../../styles/iconography";
import {
  InputContainer,
  LeftSlot,
  Input,
  CloseIcon,
  DropdownContainer,
  DropdownItem,
} from "./styled";
import Close from "../../styles/iconography/Close";
import { ColorTokens } from "../../tokens";

// TODO : separate compont for input
type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchOptions?: string[]; // TODO: may contain with more option  + cumtom renderer
  onSelectSearchOption?: (option: string) => void;
};

type DropdownProps = Pick<Props, "searchOptions" | "onSelectSearchOption"> & {};

const Dropdown: React.FC<DropdownProps> = ({
  searchOptions = [],
  onSelectSearchOption = () => {},
}) => {
  return (
    <DropdownContainer>
      {/* TODO: should be customizable */}
      <DropdownItem selectable={false}>
        Results: {searchOptions.length}
      </DropdownItem>
      {searchOptions.map((value, index) => (
        <DropdownItem
          onClick={() => onSelectSearchOption(value)}
          key={`${index}_${value}`}
        >
          {value}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

// TODO: use ref
const Search: React.FC<Props> = ({
  placeholder = "",
  searchOptions = [],
  onChange,
  value,
  onSelectSearchOption,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  const hasSearchResults = !!searchOptions.length;

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
        {/* Eventually will be a IconButton */}
        {value && (
          <CloseIcon onClick={handleClear}>
            <Close size="lg" color={ColorTokens.Light.trunks} />
          </CloseIcon>
        )}
      </InputContainer>

      {hasSearchResults && (
        <Dropdown
          searchOptions={searchOptions}
          onSelectSearchOption={onSelectSearchOption}
        />
      )}
    </div>
  );
};

export default Search;
