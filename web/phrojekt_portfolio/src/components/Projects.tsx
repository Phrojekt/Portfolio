import Image from "next/image"
import DoctorStrangeProject from "../images/Doctor_Strange_Template.svg"
import RentalProject from "../images/RentalMobilistic_Template.svg"
import PokeDexProject from "../images/PokeDex_Template.svg"
import CalculatorProject from "../images/Calculator_Template.svg"
import Link from "next/link"

export function Projects() {
  return(
    <div className="h-full pl-[110px] pb-[80px] pr-[110px]">
      <div>
        <div className="flex justify-center -translate-y-4 bg-white rounded-b-lg w-[255px] pt-[80px] pb-[40px] font-bold text-[40px]">
          &lt; Projetos &gt;
        </div>
      </div>
      <div className="mt-[70px] grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-10">
        <div className=" flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Doctor Strange Fanpage</h2>
          <Image src={DoctorStrangeProject} alt="doctorStrangeProject"/>
          <div className="flex justify-center gap-x-2 p-0 m-0 -translate-x-2">
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Ver Mais</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Rental Mobilistic (MVP)</h2>
          <Image src={RentalProject} alt="rentalMobilisticProject"/>
          <div className="flex justify-center gap-x-2 p-0 m-0 -translate-x-2">
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Ver Mais</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>     
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Pokédex(PokéAPI)</h2>
          <Image src={PokeDexProject} alt="pokeDexProject"/>
          <div className="flex justify-center gap-x-2 p-0 m-0 -translate-x-2">
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Ver Mais</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="text-white text-2xl font-bold">Calculadora</h2>
          <Image src={CalculatorProject} alt="CalculatorProject"/>
          <div className="flex justify-center gap-x-2 p-0 m-0 -translate-x-2">
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Ver Mais</p>
            </Link>
            <Link href="#" className="flex items-center justify-center rounded-md bg-green h-[40px] w-[250px] p-[10px]"> 
              <p className=" font-alt text-2xl text-medium-purple">Github</p>
            </Link>
          </div>  
        </div>
      </div>
    </div>
  )
}