import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  text?: string;
  type?: "primary" | "secondary";
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${props => props.type === "primary" ? "#EB9B00" : "#FFF"};
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${props => props.type === "primary" ? "#FFF" : "#EB9B00"};
  font-size: 20px;
  cursor: pointer;
  ${props => props.type === "primary"
    ? css`
        &:hover {
          background: #B87900;
          border: 2px solid #B87900;
        }
      `
    : css`
        &:hover {
          background: #FFF;
          border: 2px solid #B87900;
          color: #B87900;
        }
      `
  };
  /* &:hover {
    background: #B87900;
    border: 2px solid #B87900;
  } */
`;

export const AbBotao = ({ text, type = "primary", onClick }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} type={type}>
      {text}
    </BotaoEstilizado>
  );
}