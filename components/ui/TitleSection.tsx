import React from "react";

interface Props {
  text: string;
}

export const TitleSection = ({ text }: Props) => {
  return <h1 className="text-blue-900 font-semibold text-4xl mb-0">{text}</h1>;
};
