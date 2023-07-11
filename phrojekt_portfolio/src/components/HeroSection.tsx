import Image from "next/image"
import Logo from "../images/Logo.svg"
import UserIcon from "../images/CurriculumIcon.svg"
import Github from "../images/mdi_github.svg"
import Link from 'next/link'

export function HeroSection () {
  return(
    <div className="flex flex-1 flex-col justify-center items-center bg-custom-gradient h-screen" style={{
      background:
        'radial-gradient(59.67% 59.67% at 50.00% 8.79%, rgba(162, 89, 255, 0.30) 0%, rgba(22, 1, 40, 0.30) 100%), linear-gradient(244deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #0B0014'}}>
        <Image src={Logo} alt="Logo" />
        <div className="mt-[16px] flex justify-around gap-8">
          <Link href="#" className="flex flex-1 items-center justify-start gap-2 rounded-md bg-green  hover:bg-hover-green  w-[185px] h-[40px] p-[10px]"> 
            <Image src={UserIcon} alt="UserIcon"></Image> 
            <p className=" font-alt text-2xl text-medium-purple"> &gt; Currículo</p>
          </Link>
          <Link href="#" className="flex flex-1 items-center justify-start gap-2 rounded-md bg-green  hover:bg-hover-green  w-[185px] h-[40px] p-[10px]"> 
            <Image src={Github} alt="Github"></Image> 
            <p className=" font-alt text-2xl text-medium-purple"> &gt; Github</p>
          </Link>
        </div>
        
      </div>
  )
}