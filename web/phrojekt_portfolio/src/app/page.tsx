import './globals.css'
import { HeroSection } from '@/components/HeroSection'
import {
  Titillium_Web as Titillium,
  Inika as Inika,
} from 'next/font/google'
import { Projects } from '@/components/Projects'

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
    <body>
      <main className={`${titillium.variable} ${inika.variable} w-full h-fit font-sans bg-dark-purple`}>
        <HeroSection />
        <Projects />
    </main>
    </body>
    
  )
}
