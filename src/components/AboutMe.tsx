'use client'
import Line from "../images/Line.png"
import Image from "next/image"

export function AboutMe () {

  return(
    <div className="-translate-y-20">
      <div className="h-full sm:pl-[10px] md:pl-[50px] lg:pl-[110px] m-0 translate-y-32 sm:pr-[10px] md:pr-[70px] lg:pr-[110px]">
        <div className="flex space-x-8">
          <div className=" z-10 flex justify-center -translate-y-4 bg-white rounded-b-lg sm:w-[180px] md:w-[255px] pt-[80px] pb-[40px] font-bold sm:text-2xl lg:text-3xl">
              &lt; Sobre mim &gt;
          </div>
        </div>
      </div>
      <div className="lg:flex md:flex sm:block">
        <div className="m-0 bg-light-purple sm:pl-[20px] sm:pr-[10px] md:pl-[50px] md:pr-[20px] lg:pl-[110px] pt-[170px]  pb-[60px] lg:rounded-r-[60px]">
          <div className="text-white sm:w-11/12 lg:w-[598px] font-semibold font-sans lg:text-[26px] sm:text-[18px]">Meu nome é Paulo Henrique, sou um Desenvolvedor Frontend com formação complementar em UX Design, focado em criar interfaces excepcionais para proporcionar experiências memoráveis aos usuários. Minha abordagem se baseia em metodologias ágeis, com ênfase na transparência e resolução de problemas para atender às necessidades do cliente. Sou um entusiasta do aprendizado contínuo e estou sempre em busca de evolução.
          </div>

          <Image src={Line} alt="Linha" className="mt-[60px] md:translate-x-[-40px]"></Image>

          <div className="sm:flex sm:flex-col sm:pl-[20px] sm:gap-y-[50px] md:flex-row md:flex-wrap  lg:flex-row lg:pl-0 lg:gap-y-0 gap-x-[90px] mt-5">
            
            <div>
              <div className="text-white font-bold text-xl">Soft-Skills</div>
                <ul className="list-disc">
                  <li className="text-white">Aprendizagem Contínua</li>
                  <li className="text-white">Design Thinking</li>
                  <li className="text-white">Design Sprint</li>
                  <li className="text-white">Foco no Usuário</li>
                  <li className="text-white">Design Inclusivo</li>
                  <li className="text-white">Criatividade</li>
                  <li className="text-white">Agile</li>
                  <li className="text-white">Aprendizagem Rápida</li>
                  <li className="text-white">Pensamento Crítico</li>
                </ul>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Tecnologias</div>
              <ul className="list-disc">
                <li className="text-white">Git</li>
                <li className="text-white">Figma</li>
                <li className="text-white">HTML</li>
                <li className="text-white">CSS</li>
                <li className="text-white">JavaScript</li>
                <li className="text-white">React</li>
                <li className="text-white">Next.js</li>
                <li className="text-white">TypeScript</li>
                <li className="text-white">TailwindCSS</li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Acadêmico</div>
                <ul className="list-disc">
                  <li className="text-white">
                    <div className="font-semibold">Engenharia de Software</div>
                    <div>Bacharelado, Estácio de Sá</div>
                    <div className="text-sm">Em andamento...</div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        
      </div>
    </div>

  )
}
