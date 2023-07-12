import './globals.css'
import { HeroSection } from '@/components/HeroSection'
import { Projects } from '@/components/Projects'
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


export const metadata = {
  title: 'Phrojekt | Paulo Henrique',
  description: 'Portfolio de Paulo Henrique | @Phrojekt_dev',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body>
        <main className={`${titillium.variable} ${inika.variable} w-full h-fit font-sans bg-dark-purple`}>
          <HeroSection />
          <Projects />
          {children}
          <Footer />
        </main>
      </body>
    </html>  
    )

}
