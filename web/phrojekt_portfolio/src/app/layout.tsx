import './globals.css'
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
  title: 'Phrojekt',
  description: 'Portfolio de Paulo Henrique | @Phrojekt_dev',
}

export default function RootLayout({children, }: { children: React.ReactNode }) {
  return (
    <main className="w-screen bg-dark-purple h-full">
      <body>
        <div className="w-screen bg-custom-gradient h-full" style={{
        background:
          'radial-gradient(59.67% 59.67% at 50.00% 8.79%, rgba(162, 89, 255, 0.30) 0%, rgba(22, 1, 40, 0.30) 100%), linear-gradient(244deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #0B0014'
      }}>

        </div>
      </body>
    </main>
  )
}
