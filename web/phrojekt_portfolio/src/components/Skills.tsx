import Image from "next/image"
import HTMLBox from "../images/HTML_Box.svg"
import CSSBox from "../images/CSS_Box.svg"
import JSBox from "../images/JS_Box.svg"
import ReactBox from "../images/React_Box.svg"
import NextBox from "../images/Next_Box.svg"
import TSBox from "../images/TS_Box.svg"
import TailBox from "../images/Tailwind_Box.svg"
import FigBox from "../images/Figma_Box.svg"
import GitBox from "../images/Git_Box.svg"

export function Skills() {
  return (
    <div className="rounded-lg border-solid border-2 border-green pt-[50px] ">
      <div className="flex justify-between items-center pl-[40px] pr-[30px]">
        <div className="text-white font-sans text-[22px]">Skills</div>
        <div className="flex gap-x-3">
          <div className="rounded-full bg-red w-[16px] h-[16px]"></div>
          <div className="rounded-full bg-yellow w-[16px] h-[16px]"></div>
          <div className="rounded-full bg-green w-[16px] h-[16px]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-y-6 justify-items-center mt-[20px] pb-[50px]">
        <div>
          <Image src={HTMLBox} alt="Html" />
        </div>
        <div>
          <Image src={CSSBox} alt="CSS" />
        </div>
        <div>
          <Image src={JSBox} alt="JS" />
        </div>
        <div>
          <Image src={ReactBox} alt="React" />
        </div>
        <div>
          <Image src={NextBox} alt="Next" />
        </div>
        <div>
          <Image src={TSBox} alt="TS" />
        </div>
        <div>
          <Image src={TailBox} alt="Tailwindcss" />
        </div>
        <div>
          <Image src={FigBox} alt="Figma" />
        </div>
        <div>
          <Image src={GitBox} alt="Git" />
        </div>
      </div>
    </div>
  )
}