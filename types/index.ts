import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchAuthorProps {
  author: string;
  setAuthor: (author: string) => void;
}

export interface BookProps {
  authors: string[];
  title: string;
  language: string;
  book_type: string;
  copyright: number;
  summary: string;
  max_age: number;
}