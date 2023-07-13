'use client'
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

import { 
  cssText, figmaText, gitText,
  htmlText, reactText, jsText, 
  nextText, tailText, tsText } from "./TechText"

export function Skills({changeTitle, handleChangeText}: any) {

  function handleSetSkills(title: string, text: string) {
    changeTitle(title)
    handleChangeText(text)
  }

  return (
    <div>
      <div className="text-sm lg:text-white sm:text-medium-purple"> Selecione uma Tech para ler sobre. </div>
      <div className="rounded-lg border-solid border-2 sm:bg-dark-purple lg:bg-none lg:border-green pt-[50px] ">
      <div className="flex justify-between items-center pl-[40px] pr-[30px]">
        <div className="text-white font-sans text-[22px]">Skills</div>
        <div className="flex gap-x-3">
          <div className="rounded-full bg-red w-[16px] h-[16px]"></div>
          <div className="rounded-full bg-yellow w-[16px] h-[16px]"></div>
          <div className="rounded-full bg-green w-[16px] h-[16px]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-y-6 justify-items-center mt-[20px] pb-[50px]">

        <button type="button" onClick={() => handleSetSkills('HTML', htmlText)} className="hover:-translate-y-2">
          <Image src={HTMLBox} alt="Html" />
        </button>

        <button type="button" onClick={() =>handleSetSkills('CSS', cssText)} className="hover:-translate-y-2">
          <Image src={CSSBox} alt="CSS" />
        </button>

        <button type="button" onClick={() => handleSetSkills('JavaScript', jsText)} className="hover:-translate-y-2">
          <Image src={JSBox} alt="JS" />
        </button>

        <button type="button" onClick={() => handleSetSkills('React', reactText)} className="hover:-translate-y-2">
          <Image src={ReactBox} alt="React" />
        </button>

        <button type="button" onClick={() => handleSetSkills('Next.js', nextText)} className="hover:-translate-y-2">
          <Image src={NextBox} alt="Next" />
        </button>

        <button type="button" onClick={() => handleSetSkills('TypeScript', tsText)} className="hover:-translate-y-2">
          <Image src={TSBox} alt="TypeScript" />
        </button>

        <button type="button" onClick={() => handleSetSkills('Tailwind', tailText)} className="hover:-translate-y-2">
          <Image src={TailBox} alt="Tailwind" />
        </button>

        <button type="button" onClick={() => handleSetSkills('Figma', figmaText)} className="hover:-translate-y-2">
          <Image src={FigBox} alt="React" />
        </button>

        <button type="button" onClick={() => handleSetSkills('Git', gitText)} className="hover:-translate-y-2">
          <Image src={GitBox} alt="Git" />
        </button>
        

      </div>
    </div>
    </div>
    
  )
}