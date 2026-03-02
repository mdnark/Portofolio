"use client";

import { CustomButton } from "#/components/ui/CustomButton";
import { listCompany } from "#/constants/companies";
import Image from "next/image";
import React from "react";
import { HiDownload } from "react-icons/hi";

export const HeroPage = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen flex flex-col gap-24"
      id="home"
    >
      <Image
        src={"/assets/abstrac-line.svg"}
        alt=""
        width={1290}
        height={700}
        className="absolute -top-14 -left-5"
      />

      <div className="relative flex items-center justify-between gap-28 px-36 pt-16">
        <div className="w-fill flex flex-col gap-4">
          <p className="text-base text-blue-900 font-semibold mb-0">
            Hi, I’m <span className="text-blue-600">M Danar Kahfi</span>
          </p>
          <div>
            <h1 className="inline-block bg-primary-gradient font-bold text-4xl bg-clip-text text-transparent mb-0 pb-3">
              UI/UX Designer &
            </h1>
            <h1 className="w-full inline-block bg-primary-gradient font-bold text-4xl bg-clip-text text-transparent mb-0 pb-3 text-end">
              Front-End Developer
            </h1>
          </div>
          <p className="text-slate-600 text-base">
            I specialize in crafting responsive web applications with clean
            design systems and scalable front-end architecture. Passionate about
            solving real user problems through thoughtful design and efficient
            code.
          </p>
          <div className="flex gap-4">
            <CustomButton text="View Project" isPrimary />
            <CustomButton
              text="Download CV"
              icon={<HiDownload className="text-base" />}
            />
          </div>
        </div>
        <div className="relative w-[963px] h-[392px]">
          <Image
            src={"/assets/blob.svg"}
            alt=""
            width={405}
            height={390}
            className="absolute top-16 z-0"
          />
          <Image
            src={"/assets/hero-photo.png"}
            alt=""
            width={250}
            height={450}
            className="absolute top-0 right-9 z-10"
          />
          <div
            className="absolute -bottom-16 right-5 w-[350px] h-28 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
            }}
          />
        </div>
      </div>
      <div className="overflow-hidden w-full bg-slate-50">
        <div
          className="absolute left-0 w-20 h-28 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 w-20 h-28 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
          }}
        />
        <div className="flex w-max animate-marquee px-11 py-3 gap-16 items-center">
          {listCompany.concat(listCompany).map((val, idx) => (
            <Image
              key={idx}
              src={val.path}
              alt=""
              width={val.width}
              height={val.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
