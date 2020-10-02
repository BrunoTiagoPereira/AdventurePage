import React from "react";
import { textSpanIntersectsWith } from "typescript";

import { ButtonOutline, ButtonDefault } from "./styles";

export interface IButtonProps {
  text?: string;
  type?: "outline" | "default";
}

const Button: React.FC<IButtonProps> = ({ text, type }) => {
  if (type === "outline") return <ButtonOutline>{text}</ButtonOutline>;

  return <ButtonDefault>{text}</ButtonDefault>;
};

export default Button;
