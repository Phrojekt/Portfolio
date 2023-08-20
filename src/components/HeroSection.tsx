import Image from "next/image"
import Logo from "../images/Logo.svg"
import UserIcon from "../images/CurriculumIcon.svg"
import Github from "../images/mdi_github.svg"
import Link from "next/link"

export function HeroSection () {
  return(
    <div className="flex flex-1 flex-col justify-center items-center bg-custom-gradient h-screen" style={{
      background:
        'radial-gradient(59.67% 59.67% at 50.00% 8.79%, rgba(162, 89, 255, 0.30) 0%, rgba(22, 1, 40, 0.30) 100%), linear-gradient(244deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #0B0014'}}>
        <Image src={Logo} alt="Logo" className=" sm:w-[90%] md:w-[646px]" />
        <div className="sm:mt-[16px] sm:flex sm:flex-col lg:flex-row  md:justify-around sm:space-y-2 lg:space-y-0 lg:gap-8">
          <Link href="/cv.pdf" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-start gap-2 rounded-md bg-green hover:bg-hover-green sm:h-[20px] sm:w-38 md:h-[40px] p-[10px] md:w-48">
            <Image src={UserIcon} alt="UserIcon" />
            <p className="font-alt sm:text-lg md:text-2xl text-medium-purple">&gt; Currículo</p>
          </Link>
          <Link href="https://github.com/Phrojekt" target="_blank" className=" flex flex-1 items-center justify-start gap-2 rounded-md bg-green  hover:bg-hover-green sm:h-[20px] sm:w-38 md:h-[40px] p-[10px] md:w-48"> 
            <Image src={Github} alt="Github"></Image> 
            <p className=" font-alt sm:text-lg md:text-2xl text-medium-purple"> &gt; Github</p>
          </Link>
        </div>
        
      </div>
  )
}