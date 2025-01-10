import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

const StyledInput = styled.input`
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
`

export interface TextFieldProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
}

export const TextField = ({ label, value, onChange, type = 'text' }: TextFieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput type={type} value={value} onChange={handleChange} />
        </div>
    )
}