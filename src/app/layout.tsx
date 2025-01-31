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
          <div className="flex justify-center relative">
            <h1 className="text-center text-4xl mb-6 font-rubik text-[#2c1810]">
              RETRO NEXT.JS
            </h1>
            <Link
              href="https://github.com/dev-shetty/rendering-paradigm"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0"
            >
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                className="fill-current hover:opacity-80 transition-opacity"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </Link>
          </div>
          <nav className="w-full flex justify-between items-center p-4">
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
