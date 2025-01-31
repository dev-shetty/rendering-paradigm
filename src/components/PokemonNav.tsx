"use client"

import { useRouter } from "next/navigation"

export default function PokemonNav({
  currentId,
  isCSR,
}: {
  currentId: number
  isCSR?: boolean
}) {
  const router = useRouter()

  const handleNav = (direction: "prev" | "next") => {
    const newId =
      direction === "prev" ? Math.max(1, currentId - 1) : currentId + 1

    if (isCSR) {
      router.push(`/csr/pokemon?id=${newId}`)
    } else {
      router.push(`/ssr?id=${newId}`)
    }
  }

  return (
    <div className="flex gap-4 justify-center mt-4">
      <button
        onClick={() => handleNav("prev")}
        className="px-4 py-2 border-2 border-[#2c1810] bg-[#f8f3e7] hover:bg-[#e8e3d7]"
        disabled={currentId <= 1}
      >
        Previous
      </button>
      <button
        onClick={() => handleNav("next")}
        className="px-4 py-2 border-2 border-[#2c1810] bg-[#f8f3e7] hover:bg-[#e8e3d7]"
      >
        Next
      </button>
    </div>
  )
}
