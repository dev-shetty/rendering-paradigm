import RetroSection from "@/components/RetroSection"
import React from "react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with SSG",
    content: "Static Site Generation is awesome...",
    date: "2024-03-20",
  },
  {
    id: 2,
    title: "Why Next.js is Great",
    content: "Next.js provides amazing features...",
    date: "2024-03-21",
  },
]

async function getTime() {
  const response = await fetch(
    "https://timeapi.io/api/time/current/coordinate?latitude=12.91&longitude=74.85",
    {
      next: { revalidate: 5 }, // ISR cache configuration
    }
  )
  const data = await response.json()
  return data.dateTime
}

export default async function ISRPage() {
  const time = await getTime()

  return (
    <RetroSection title="INCREMENTAL SITE GENERATION">
      <div className="p-6 border-4 border-[#2c1810] bg-[#f8f3e7] font-mono">
        <h2 className="text-2xl font-bold mb-4">TIMESTAMP DATA</h2>
        <div className="space-y-4">
          <div className="mt-8">
            <p>Current Time:</p>
            <div className="p-4 border-2 border-[#2c1810] inline-block">
              {new Date(time).toLocaleTimeString()}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Static Blog Posts</h3>
            {blogPosts.map((post) => (
              <div key={post.id} className="mb-6 p-4 border-2 border-[#2c1810]">
                <h4 className="font-bold">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="mt-2">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RetroSection>
  )
}
