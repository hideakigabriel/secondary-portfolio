import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secondary Portfolio | Gabriel Hideaki',
  description: 'A project to explore and put into practice design concepts, design pattern, Taiwind CSS, Next JS, UI, creativity and among other concepts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
