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

export function Skills({changeTitle, handleChangeText}: any) {
  const htmlText = 'Utilizando o HTML, é possível criar cabeçalhos, parágrafos, listas, tabelas, formulários e muito mais. Além disso, o HTML também é responsável por fornecer a estrutura básica de uma página, indicando o título, a codificação de caracteres e as informações sobre o documento. Combinado com o CSS e o JavaScript, o HTML forma a base do desenvolvimento web moderno, possibilitando a criação de páginas dinâmicas e interativas.'

  const cssText = 'CSS (Cascading Style Sheets) é uma linguagem de estilos utilizada em conjunto com o HTML para controlar a aparência e o layout dos elementos em uma página da web. Com o CSS, é possível aplicar diferentes estilos, como cores, fontes, tamanhos e posicionamentos, a elementos específicos ou a grupos de elementos. As regras de estilo são escritas em um arquivo separado do HTML e são aplicadas ao documento HTML através de seletores, que identificam os elementos a serem estilizados.'

  const jsText = 'JavaScript é uma linguagem de programação de alto nível, interpretada e amplamente utilizada no desenvolvimento web. Ela permite a criação de páginas interativas e dinâmicas, adicionando funcionalidades e comportamentos aos elementos HTML. Com o JavaScript, é possível manipular o conteúdo da página, responder a eventos, realizar cálculos, fazer requisições HTTP, criar animações e muito mais. Ele é executado no navegador do usuário, tornando-o ideal para interações em tempo real.'

  const reactText = 'React é uma biblioteca de código aberto para interfaces gráficas (GUI) criada pelo Facebook. Ela tem como foco tornar a experiência do usuário com a interface mais eficiente. As vantagens de usar React incluem: fácil de usar e escrever, suporte a componente reusável em JavaScript, componente fácil de escrever, melhor desempenho com Virtual DOM e amigável a SEO.'

  const nextText = 'Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel. O Next.js busca reunir diversas funcionalidades como renderização híbrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto.'

  const tsText = 'TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática e outros recursos ao JavaScript. Ele pode ajudar a tornar o código mais legível e previsível, além de fornecer uma camada adicional de segurança ao desenvolvimento.'

  const tailText = 'Tailwind é um framework CSS baseado em utilidades que foi criado em 2017. Ele tem como prioridade a facilidade de customização e permite estilizar elementos com quase como escrever estilizações inline, só que com classes.'

  const figmaText = 'Figma é um editor online de gráficos vetoriais com ênfase na prototipagem de interfaces gráficas e estruturas de design de experiência de usuário. É uma ferramenta de design colaborativa e online, que não requer download, instalação ou atualização'

  const gitText = 'Git é um sistema de controle de versão distribuído e amplamente adotado. Foi criado em 2005 por Linus Torvalds, o famoso criador do kernel do sistema operacional Linux. Um número impressionante de projetos de software depende do Git para controle de versão, incluindo projetos comerciais e de código-fonte aberto.'

  function handleSetSkills(title: string, text: string) {
    changeTitle(title)
    handleChangeText(text)
  }

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
  )
}