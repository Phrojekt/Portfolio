

export const metadata = {
  title: 'Phrojekt',
  description: 'Portfolio de Paulo Henrique | @Phrojekt_dev',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <main>    
      {children}
    </main>
  )
}
