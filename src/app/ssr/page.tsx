import PokemonNav from "@/components/PokemonNav"
import RetroSection from "@/components/RetroSection"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

async function getPokemonData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  })
  return res.json()
}

export default async function SSRPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id: _id } = await searchParams
  const id = Number(_id) || 1
  const pokemonData = await getPokemonData(id)

  return (
    <RetroSection title="SERVER-SIDE RENDERING">
      <Suspense fallback={<div>Loading...</div>}>
        {pokemonData && <PokemonInfo data={pokemonData} />}
      </Suspense>
      <PokemonNav currentId={id} />
      <Link
        href="/csr/pokemon"
        className="px-4 mx-auto py-2 border-2 border-[#2c1810] bg-[#f8f3e7] hover:bg-[#e8e3d7]"
      >
        Try CSR
      </Link>
    </RetroSection>
  )
}

function PokemonInfo({
  data,
}: {
  data: {
    name: string
    height: number
    weight: number
    sprites?: {
      front_default?: string
    }
  }
}) {
  return (
    <div className="p-6 border-4 border-[#2c1810] bg-[#f8f3e7] font-mono">
      <h2 className="text-2xl font-bold mb-4">POKEMON DATA</h2>
      <div className="space-y-4">
        {data.sprites?.front_default && (
          <div className="flex justify-center mb-4">
            <Image
              src={data.sprites.front_default}
              alt={data.name}
              className="w-32 h-32"
              width={128}
              height={128}
            />
          </div>
        )}
        <div className="space-y-2 grid gap-2 items-center grid-cols-3">
          <div>
            <p>Pokemon Name:</p>
            <div className="p-4 border-2 w-full border-[#2c1810] inline-block">
              {data.name}
            </div>
          </div>
          <div>
            <p>Pokemon Height:</p>
            <div className="p-4 border-2 w-full border-[#2c1810] inline-block">
              {data.height}
            </div>
          </div>
          <div>
            <p>Pokemon Weight:</p>
            <div className="p-4 border-2 w-full border-[#2c1810] inline-block">
              {data.weight}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
