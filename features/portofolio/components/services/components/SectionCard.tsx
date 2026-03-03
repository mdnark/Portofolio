import { SubTitleSection } from "#/components/ui/SubTitleSection";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
}

export const SectionCard = ({ height, src, width, subtitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-5 px-12 py-8 items-start bg-slate-50 w-fit rounded-2xl">
      <Image src={src} alt="" width={width} height={height} />
      <h1 className="font-semibold text-xl text-slate-700 mb-0">{title}</h1>
      <SubTitleSection text={subtitle} className="!text-start w-52" />
    </div>
  );
};
