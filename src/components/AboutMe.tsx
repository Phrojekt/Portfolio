'use client'
import Link from "next/link";
import { Skills } from "./Skills";
import { useState } from "react";

export function AboutMe () {
  const [title, setTitle] = useState<string>("Sobre mim");
  const [text, setText] = useState<string>("Meu nome é Paulo Henrique, sou um Desenvolvedor Frontend com formação complementar em UX Designer, focado em criar interfaces excepcionais para proporcionar experiências memoráveis aos usuários. Minha abordagem se baseia em metodologias ágeis, com ênfase na transparência e resolução de problemas para atender às necessidades do cliente. Sou um entusiasta do aprendizado contínuo e estou sempre em busca de evolução.");

  function changeTitle(newTitle: string) {
    setTitle(newTitle)
  }
  function handleChangeText(  newText: string) {
    setText(newText)
  }

  return(
    <div className="-translate-y-20">
      <div className="h-full pl-[110px] m-0 translate-y-32 pr-[110px]">
        <div>
          <div className=" z-10 flex justify-center -translate-y-4 bg-white rounded-b-lg w-[255px] pt-[80px] pb-[40px] font-bold text-[40px]">
              &lt; {title} &gt;
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="m-0 bg-green pl-[110px] pt-[170px] pb-[180px] rounded-lg">
          <div className="text-medium-purple w-9/12 font-bold font-sans text-[26px]">{text}
          </div>
          <div className="flex gap-x-2 mt-[20px]">
            <Link href="#" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] w-[125px] p-[10px] hover:bg-dark-purple border-black border-[1px] hover:border-white"> 
              <p className=" font-alt text-2xl text-white font-bold">Linkedin</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] w-[125px] p-[10px] hover:bg-dark-purple border-black border-[1px] hover:border-white"> 
              <p className=" font-alt text-2xl text-white font-bold">Github</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-medium-purple h-[40px] w-[125px] p-[10px] hover:bg-dark-purple border-black border-solid border-[1px] hover:border-white"> 
              <p className=" font-alt text-2xl text-white font-bold">Currículo</p>
            </Link>
          </div>
        </div>
        <div className="grid-span-2 p-[20%] pt-[170px]">
          <Skills changeTitle={changeTitle} handleChangeText={handleChangeText} />
        </div>
      </div>
    </div>

  )
}