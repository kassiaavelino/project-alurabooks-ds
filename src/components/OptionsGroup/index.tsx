import React, { useState } from "react";
import { styled } from "styled-components";

const StyledSection = styled.section< { selected: boolean } >`
  width: 194px;
  height: 88px;
  background: ${props => props.selected ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)" : "#FFFFFF"};
  border: 1px solid;
  border-color: ${props => props.selected ? "#002F52" : "#EB9B00"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header{
    color: ${props => props.selected ? "#FFFFFF" : "#EB9B00"};
    font-size: 12px;
    font-weight: 400;
  }

  strong{
    color: ${props => props.selected ? "#FFFFFF" : "#EB9B00"};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props => props.selected ? "#FFFFFF" : "rgba(0, 0, 0, 0.54)"};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface OptionGroup {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface OptionsGroupProps {
  options: OptionGroup[];
  defaultValue?: OptionGroup | null;
  onChange?: (option: OptionGroup) => void;
}
export const OptionsGroup = ({ options, defaultValue, onChange }: OptionsGroupProps) => {

  const [ select, setSelect ] = useState<OptionGroup | null>(defaultValue ?? null);

  const handleSelect = (option: OptionGroup) : void => {
    setSelect(option);
    if(onChange) {
      onChange(option)
    };
  }

  return (
    <>
      {options.map(option => (
        <StyledSection 
          key={option.id} 
          onClick={() => handleSelect(option)} 
          selected={select?.id === option.id}
        >
          <header>
            {option.title}
          </header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>
            {option.footer}
          </footer>
        </StyledSection>
      ))}
    </>
  )
}