import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'e-Gyapan Nepal',
  description:
    'information about everything including travel and culture, technology and gadgets, health and finances, sports, automobiles and so. on. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <Nav />
        <main className="m-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
