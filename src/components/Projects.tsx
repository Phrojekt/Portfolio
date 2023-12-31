import Image from "next/image"
import DoctorStrangeProject from "../images/DSTemplate.png"
import RentalProject from "../images/RCTemplate.png"
import Link from "next/link"

export function Projects() {
  return(
    <div className="h-full sm:pl-[10px] md:pl-[70px] lg:pl-[110px] pb-[80px] sm:pr-[10px] md:pr-[70px] lg:pr-[110px]">
      <div>
        <div className="flex justify-center -translate-y-4 bg-white rounded-b-lg sm:w-[180px] md:w-[255px] pt-[80px] pb-[40px] font-bold sm:text-2xl lg:text-3xl">
          &lt; Projetos &gt;
        </div>
      </div>
      <div className="mt-[70px] sm:pl-[5%] sm:pr-[10%] md:pl-[0%] md:pr-[0%] flex flex-wrap  justify-center gap-10">
        <div className="relative flex justify-center group sm:w-[300px] md:w-[460px] lg:w-[520px] xl:w-[80%] rounded-[10px]  bg-black p-5">   
          <Image src={DoctorStrangeProject} alt="doctorStrangeProject"/>
          <div className="w-full h-full absolute left-0 top-0 bg-overlay-purple/90 group-hover:visible invisible rounded-[10px] delay-150">
            <div className="flex flex-col sm:gap-y-1 md:gap-y-4 text-white pl-5">
              <div className="sm:text-xl md:text-3xl font-bold pt-5">Doctor Strange Fanpage</div>
              <div className="font-semibold md:text-lg">HTML, CSS & JavaScript</div>
              <div className="sm:pt-0 sm:text-sm md:text-base md:pt-4 sm:w-[80%] md:w-[60%]">
                <div>Projeto desenvolvido desde a concepção da interface no Figma até o protótipo funcional em HTML, CSS e JavaScript. <Link href="/DoctorStrangePDF.pdf" target="_blank" className="underline text-green">Ver mais</Link></div>
              <div className="flex sm:gap-x-1 md:gap-x-7 sm:pt-2 md:pt-10">
                <Link href="https://phrojekt.github.io/Doctor-Strange/" target="_blank" className="flex items-center justify-center rounded-lg bg-green hover:bg-hover-green sm:h-[20px] md:h-[40px] sm:w-[90px] md:w-[140px] p-[10px]"> 
                  <p className=" font-alt sm:text-lg md:text-2xl text-medium-purple">Visitar</p>
                </Link>
                <Link href="https://github.com/Phrojekt/Doctor-Strange" target="_blank" className="flex items-center justify-center rounded-lg bg-green  hover:bg-hover-green sm:h-[20px]  md:h-[40px] sm:w-[90px] md:w-[140px] p-[10px]"> 
                  <p className=" font-alt sm:text-lg md:text-2xl text-medium-purple">Github</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="relative flex justify-center group sm:w-[300px] md:w-[460px] lg:w-[520px] xl:w-[80%] rounded-[10px]  bg-Rental-Gray p-5">   
          <Image src={RentalProject} alt="rentalMobilisticProject"/>
          <div className="w-full h-full absolute left-0 top-0 bg-overlay-purple/90 group-hover:visible invisible rounded-[10px] delay-150">
            <div className="flex flex-col sm:gap-y-1 md:gap-y-4 text-white pl-5">
              <div className="sm:text-xl md:text-3xl font-bold pt-5">Rental Mobilistic</div>
              <div className="md:text-lg font-semibold">HTML, CSS & JavaScript</div>
              <div className="sm:pt-0 sm:text-xs md:text-base md:pt-4 sm:w-[90%] md:w-[60%]">
                <div>Projeto MVP desenvolvido desde a concepção da interface no Figma até o protótipo funcional em HTML, CSS e JavaScript. Possuí Dashboards que atualizam automaticamente junto ao cadastro de carros e locações. <Link href="/RentalMobilisticPDF.pdf" target="_blank" className="underline text-green">Ver mais</Link></div>
              <div className="flex sm:gap-x-1 md:gap-x-7 sm:pt-2 md:pt-10">
                <Link href="https://phrojekt.github.io/Rental_Mobilistic/" target="_blank" className="flex items-center justify-center rounded-lg bg-green hover:bg-hover-green sm:h-[20px] md:h-[40px] sm:w-[90px] md:w-[140px] p-[10px]"> 
                  <p className=" font-alt sm:text-lg md:text-2xl text-medium-purple">Visitar</p>
                </Link>
                <Link href="https://github.com/Phrojekt/Rental_Mobilistic" target="_blank" className="flex items-center justify-center rounded-lg bg-green  hover:bg-hover-green  sm:h-[20px] md:h-[40px] sm:w-[90px] w-[140px] p-[10px]"> 
                  <p className=" font-alt sm:text-lg md:text-2xl text-medium-purple">Github</p>
                </Link>
                </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}
