import type { Metadata } from "next"
import { Rubik_Mono_One, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const rubikMono = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rubik-mono",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
})

export const metadata: Metadata = {
  title: "Next.js Rendering Patterns",
  description: "Demo of different rendering patterns in Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rubikMono.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-[#f8f3e7] text-[#2c1810]">
        <div className="px-4 py-2 bg-[#2c1810] text-[#f8f3e7] text-center font-mono text-sm border-b-4 border-[#d4a373]">
          🚀 EXPLORE DIFFERENT NEXT.JS RENDERING PATTERNS
        </div>
        <header className="bg-[#f8f3e7] p-6 border-b-4 border-[#2c1810]">
          <h1 className="text-center text-4xl mb-6 font-rubik text-[#2c1810]">
            RETRO NEXT.JS
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                { href: "/", label: "HOME" },
                { href: "/csr", label: "CSR" },
                { href: "/ssr", label: "SSR" },
                { href: "/ssg", label: "SSG" },
                { href: "/isr", label: "ISR" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-6 py-2 font-mono font-bold
                      bg-[#f8f3e7] text-[#2c1810] 
                      border-4 border-[#2c1810]
                      hover:bg-[#2c1810] hover:text-[#f8f3e7]
                      transition-colors duration-200
                      shadow-[4px_4px_0px_0px_#2c1810]
                      hover:shadow-[2px_2px_0px_0px_#2c1810]
                      active:shadow-none
                      active:translate-x-1
                      active:translate-y-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4 sm:p-8 min-h-screen">
          <div className="bg-[#f8f3e7] p-8 border-4 border-[#2c1810] relative">
            <div className="relative font-mono">{children}</div>
          </div>
        </main>
        <footer className="text-center p-4 font-mono text-[#2c1810] border-t-4 border-[#2c1810] bg-[#f8f3e7]">
          BUILT WITH NEXT.JS • DEMONSTRATING RENDERING PATTERNS
        </footer>
      </body>
    </html>
  )
}
