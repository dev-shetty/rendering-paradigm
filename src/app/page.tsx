import RetroSection from "@/components/RetroSection"

export default function Home() {
  return (
    <RetroSection title="NEXT.JS RENDERING PATTERNS">
      <div className="space-y-6 font-mono">
        <div className="p-6 border-4 border-[#2c1810] bg-[#f8f3e7]">
          <h2 className="text-2xl font-bold mb-4">WELCOME TO THE DEMO!</h2>
          <p className="mb-4">
            This demo showcases different rendering patterns available in Next.js:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client-Side Rendering (CSR)</li>
            <li>Server-Side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>Incremental Static Regeneration (ISR)</li>
          </ul>
        </div>
      </div>
    </RetroSection>
  )
}
