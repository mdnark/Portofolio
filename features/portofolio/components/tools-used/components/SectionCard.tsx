import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  title: string;
}

export const SectionCard = ({ height, src, width, title }: Props) => {
  return (
    <div className="flex-shrink-0 flex flex-col gap-5 py-8 items-center bg-slate-50 w-52 rounded-2xl">
      <Image src={src} alt="" width={width} height={height} />
      <h1 className="font-semibold text-xl text-slate-700 mb-0">{title}</h1>
    </div>
  );
};
