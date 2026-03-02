import { Button } from "antd";
import React from "react";

interface Props {
  text: string;
  icon?: React.ReactNode;
  isPrimary?: boolean;
}

export const CustomButton = ({ isPrimary, text, icon }: Props) => {
  return (
    <Button
      className={`rounded-full flex items-center font-semibold text-sm px-4 py-2 h-fit ${isPrimary ? "bg-blue-900 text-white hover:!text-white hover:!bg-blue-600" : "border border-slate-200 text-blue-900 hover:!text-blue-900"}`}
    >
      {icon}
      {text}
    </Button>
  );
};
