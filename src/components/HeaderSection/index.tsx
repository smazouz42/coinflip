'use client'
import { CTAButton } from "@/components/CTAButton";
import { DiScriptcs } from "react-icons/di";

interface HeaderSectionProps {
  title: string;
  description: string;
  titleStyle: string;
  btnStyle: string;
  clasStyle: string;
}

export const HeaderSection = ({ title, description, titleStyle, btnStyle, clasStyle }: HeaderSectionProps) => {
  return (
    <div className={clasStyle}>
      <div className="flex flex-col">
        <h1 className={titleStyle}>
          {title}
        </h1>
      </div>
      <div className="justify-center max-w-[700px] text-center">
        <p className="text-gray-500 text-2xl">{description}</p>
      </div>
      <CTAButton text="Get Started" style={btnStyle} />
    </div>
  );
};