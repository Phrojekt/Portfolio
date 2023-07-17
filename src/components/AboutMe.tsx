'use client'
import Link from "next/link";
import { Skills } from "./Skills";
import { useState } from "react";
import { defaultTitle, defaultText } from "./TechText"

export function AboutMe () {

  const [title, setTitle] = useState<string>(defaultTitle);
  const [text, setText] = useState<string>(defaultText);

  function changeTitle(newTitle: string) {
    setTitle(newTitle)
  }
  function handleChangeText(  newText: string) {
    setText(newText)
  }

  function handleReturnSet(title: string, text: string) {
    changeTitle(title)
    handleChangeText(text)
  }

  return(
    <div className="-translate-y-20">
      <div className="h-full sm:pl-[10px] md:pl-[70px] lg:pl-[110px] m-0 translate-y-32 sm:pr-[10px] md:pr-[70px] lg:pr-[110px]">
        <div className="flex space-x-8">
          <div className=" z-10 flex justify-center -translate-y-4 bg-white rounded-b-lg w-[255px] pt-[80px] pb-[40px] font-bold text-4xl">
              &lt; {title} &gt;
          </div>
          <button type="button" onClick={() => handleReturnSet(defaultTitle, defaultText)} className={`pt-[80px] pl-[80px] text-6xl text-dark-purple ${title === defaultTitle ? "invisible" : "visible"}`}>X
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="m-0 bg-green sm:pl-[10px] sm:pr-[10px] md:pl-[50px] md:pr-[20px] lg:pl-[110px] pt-[170px] pb-[180px] rounded-lg">
          <div className="text-medium-purple sm:w-11/12 lg:w-9/12 font-bold font-sans lg:text-[26px] sm:text-[20px]">{text}
          </div>
          <div className=" pt-[40px] sm:block lg:hidden">
            <Skills changeTitle={changeTitle} handleChangeText={handleChangeText} className="" />
          </div>
          <div className={`flex flex-1 flex-wrap sm:flex-col md:flex-row sm:items-start md:justify-center lg:justify-start md:gap-x-2 mt-[20px] ${title === defaultTitle ? "visible" : "invisible"}`}>
            <Link href="https://www.linkedin.com/in/phrojektdev" target="_blank" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] sm:w-[100%] md:w-[125px] p-[10px] hover:bg-dark-purple border-black border-[1px] hover:border-white mb-[10px]"> 
              <p className=" font-alt text-2xl text-white font-bold">Linkedin</p>
            </Link>
            <Link href="https://github.com/Phrojekt" target="_blank" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] sm:w-[100%] md:w-[125px] p-[10px] hover:bg-dark-purple border-black border-[1px] hover:border-white mb-[10px]"> 
              <p className=" font-alt text-2xl text-white font-bold">Github</p>
            </Link>
            <Link href="/cv.pdf" target="_blank" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] sm:w-[100%] md:w-[125px] p-[10px] hover:bg-dark-purple border-black border-solid border-[1px] hover:border-white mb-[10px]"> 
              <p className=" font-alt text-2xl text-white font-bold">Currículo</p>
            </Link>
          </div>
        </div>
        <div className="grid-span-2 p-[20%] pt-[170px] sm:hidden lg:block">
          <Skills changeTitle={changeTitle} handleChangeText={handleChangeText} className="" />
        </div>
      </div>
    </div>

  )
}
