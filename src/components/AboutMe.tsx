'use client'
import Line from "../images/Line.png"
import Image from "next/image"
import LinkedinIcon from "../images/LinkedinButton.png"
import GitHubIcon from "../images/GithubButton.png"
import CurriculumIcon from "../images/CurriculumButton.png"
import EmailIcon from "../images/EmailButton.png"
import Link from "next/link"


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
      <div className="lg:flex sm:block">
        <div className="m-0 bg-light-purple sm:pl-[20px] sm:pr-[10px] md:col-start-1 md:col-end-2 md:pl-[50px] md:pr-[20px] lg:pl-[110px] pt-[170px] pb-[60px] md:rounded-r-[60px]">
          <div className="text-white sm:w-11/12 lg:w-[598px] font-semibold font-sans lg:text-[26px] sm:text-[18px]">Meu nome é Paulo Henrique, sou um Desenvolvedor Frontend com formação complementar em UX Design, focado em criar interfaces excepcionais para proporcionar experiências memoráveis aos usuários. Minha abordagem se baseia em metodologias ágeis, com ênfase na transparência e resolução de problemas para atender às necessidades do cliente. Sou um entusiasta do aprendizado contínuo e estou sempre em busca de evolução.
          </div>

          <Image src={Line} alt="Linha" className="mt-[60px] md:translate-x-[-40px]"></Image>

          <div className="sm:flex sm:flex-col sm:pl-[20px] sm:gap-y-[50px] md:col-start-3 md:flex-row md:flex-wrap  lg:flex-row lg:pl-0 lg:gap-y-0 gap-x-[90px] mt-5">
            
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
        
        <div className="flex sm:justify-center lg:justify-start lg:flex-col items-center gap-x-4 gap-y-4 z-10 pt-10 sm:pl-0 sm:pr-0 md:pl-[10%] md:pr-[10%] lg:pl-[15%] lg:pr-0">
          <Link href="www.linkedin.com/in/phrojektdev" target="_blank" rel="noreferrer">
            <Image src={LinkedinIcon} alt="LinkedinIcon" className="sm:max-w-[45px] md:min-w-[60px]"></Image>
          </Link> 
          <Link href="https://github.com/Phrojekt" target="_blank" rel="noreferrer">
            <Image src={GitHubIcon} alt="GithubIcon" className="sm:max-w-[45px] md:min-w-[60px]" ></Image>
          </Link> 
          <Link href="/cv.pdf" target="_blank" rel="noreferrer">
            <Image src={CurriculumIcon} alt="CurriculumIcon" className="sm:max-w-[45px] md:min-w-[60px]"></Image>
          </Link> 
          <Link href="mailto:rick.p.sales@hotmail.com" target="_blank" rel="noreferrer">
            <Image src={EmailIcon} alt="MailIcon" className="sm:max-w-[45px] md:min-w-[60px]"></Image>
          </Link> 
        </div>
      </div>
    </div>

  )
}
