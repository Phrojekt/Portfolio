import Image from "next/image"
import DoctorStrangeProject from "../images/Doctor_Strange_Template.svg"
import RentalProject from "../images/Rental_Template.svg"
import PokeDexProject from "../images/PokéDex.svg"
import CalculatorProject from "../images/Calculator.svg"
import Link from "next/link"

export function Projects() {
  return(
    <div className="h-full sm:pl-[10px] md:pl-[70px] lg:pl-[110px] pb-[80px] sm:pr-[10px] md:pr-[70px] lg:pr-[110px]">
      <div>
        <div className="flex justify-center -translate-y-4 bg-white rounded-b-lg w-[255px] pt-[80px] pb-[40px] font-bold text-[40px]">
          &lt; Projetos &gt;
        </div>
      </div>
      <div className="mt-[70px] grid sm:grid-cols-1 lg:grid-cols-2 justify-center gap-10">
        <div className=" flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Doctor Strange Fanpage</h2>
          <Image src={DoctorStrangeProject} alt="doctorStrangeProject"/>
          <div className="text-sm text-white sm:-translate-x-0 md:translate-x-2 italic">#HTML #JavaScript #CSS</div>
          <div className="flex justify-center gap-x-2 p-0 m-0 sm:-translate-x-0 md:-translate-x-2">
            <Link href="https://phrojekt.github.io/Doctor-Strange/" target="_blank" className="flex items-center justify-center rounded-md bg-green hover:bg-hover-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Visitar</p>
            </Link>
            <Link href="https://github.com/Phrojekt/Doctor-Strange" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Rental Mobilistic (MVP)</h2>
          <Image src={RentalProject} alt="rentalMobilisticProject"/>
          <div className="text-sm text-white sm:-translate-x-0 md:translate-x-2 italic">#HTML #JavaScript #CSS</div>
          <div className="flex justify-center gap-x-2 p-0 m-0 sm:-translate-x-0 md:-translate-x-2">
            <Link href="https://phrojekt.github.io/Rental_Mobilistic/" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Visitar</p>
            </Link>
            <Link href="https://github.com/Phrojekt/Rental_Mobilistic" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>     
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Pokédex(PokéAPI)</h2>
          <Image src={PokeDexProject} alt="pokeDexProject"/>
          <div className="text-sm text-white sm:-translate-x-0 md:translate-x-2 italic">#HTML #JavaScript #CSS</div>
          <div className="flex justify-center gap-x-2 p-0 m-0 sm:-translate-x-0 md:-translate-x-2">
            <Link href="https://phrojekt.github.io/Pokedex/" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Visitar</p>
            </Link>
            <Link href="https://github.com/Phrojekt/Pokedex" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Calculadora</h2>
          <Image src={CalculatorProject} alt="CalculatorProject"/>
          <div className="text-sm text-white sm:-translate-x-0 md:translate-x-2 italic">#HTML #JavaScript #CSS</div>
          <div className="flex justify-center gap-x-2 p-0 m-0 sm:-translate-x-0 md:-translate-x-2">
            <Link href="https://phrojekt.github.io/Calculator/" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Ver Mais</p>
            </Link>
            <Link href="https://github.com/Phrojekt/Calculator" target="_blank" className="flex items-center justify-center rounded-md bg-green  hover:bg-hover-green  h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>
      </div>
    </div>
  )
}