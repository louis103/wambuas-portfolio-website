import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Louis Wambua Portfolio',  
  description: ' Louis Wambua Portfolio is a personal website that showcases my work and projects. I am a software engineer based in Nairobi, Kenya. I am passionate about building software that solves real-world problems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
