import Link from "next/link";
import Image from "next/image"
import LinkedinIcon from "../images/LinkedinButton.png"
import GitHubIcon from "../images/GithubButton.png"
import CurriculumIcon from "../images/CurriculumButton.png"
import EmailIcon from "../images/EmailButton.png"

export function Footer() {
  return (
    <div className="flex justify-between items-center m-0 pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-dark-purple fixed bottom-0 left-0">
      <div className='text-green font-bold font-sans text-center'> &copy; Phrojekt | Paulo Henrique</div>
      <div className="flex gap-x-1">
        <Link href="www.linkedin.com/in/phrojektdev" target="_blank" rel="noreferrer">
          <Image src={LinkedinIcon} alt="LinkedinIcon" className="max-w-[25px]"></Image>
        </Link> 
        <Link href="https://github.com/Phrojekt" target="_blank" rel="noreferrer">
          <Image src={GitHubIcon} alt="LinkedinIcon" className="max-w-[25px]"></Image>
        </Link> 
        <Link href="/cv.pdf" target="_blank" rel="noreferrer">
          <Image src={CurriculumIcon} alt="LinkedinIcon" className="max-w-[25px]"></Image>
        </Link> 
        <Link href="mailto:rick.p.sales@hotmail.com" target="_blank" rel="noreferrer">
            <Image src={EmailIcon} alt="LinkedinIcon" className="max-w-[25px]"></Image>
        </Link> 
      </div>

    </div>
  )
}
