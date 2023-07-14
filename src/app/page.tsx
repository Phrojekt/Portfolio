import './globals.css'
import { HeroSection } from '@/components/HeroSection'
import { Projects } from '@/components/Projects'
import { AboutMe } from '@/components/AboutMe'
import { Footer } from '@/components/Footer'

import {
  Titillium_Web as Titillium,
  Inika as Inika,
} from 'next/font/google'

const titillium = Titillium({ 
  subsets: ['latin'],
  weight: [ '200', '300', '400', '600', '700'],
  variable: '--font-titillium' })

const inika = Inika({
  subsets: ['latin'],
  weight: [ '400', '700'],
  variable: '--font-inika'
})

export default function Home() {
  return (

    <body className="bg-dark-purple">
        <main className={`${titillium.variable} ${inika.variable} w-full h-full font-sans`}>
          <div>
            <HeroSection />
            <Projects />
            <AboutMe />  
            <Footer />
          </div> 
        </main>
      </body>
  )
}
