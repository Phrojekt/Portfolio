import Image from 'next/image'
import './globals.css'
import { HeroSection } from '@/components/HeroSection'
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
    <main className={`${titillium.variable} ${inika.variable} w-screen font-sans bg-dark-purple h-full`}>
    <body>
      <HeroSection />
    </body>
  </main>
  )
}
