export const metadata = {
  title: 'Phrojekt | Paulo Henrique',
  description: 'Portfolio de Paulo Henrique | @Phrojekt_dev',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <main className="w-full h-full">
      {children}
    </main>
  )
}
