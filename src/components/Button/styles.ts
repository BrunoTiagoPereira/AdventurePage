import styled from "styled-components";
import { IButtonProps } from ".";

const DefaultButton = styled.button`
  width: 300px;
  height: 80px;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  color: white;
  border: 1px solid;
  transition: all 0.4s ease-in-out;
`;

export const ButtonOutline = styled(DefaultButton)`
  &:hover {
    background: white;
    color: black;
  }

  background: none;
`;

export const ButtonDefault = styled(DefaultButton)`
  background: #202020;
  border-color: black;
  &:hover {
    background: white;
    color: black;
  }
`;
