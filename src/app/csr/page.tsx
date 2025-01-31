"use client"
import { useState } from "react"
import RetroSection from "@/components/RetroSection"

export default function CSRPage() {
  const [input1, setInput1] = useState<number | null>(null)
  const [input2, setInput2] = useState<number | null>(null)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    if (input1 !== null && input2 !== null) {
      setResult(input1 + input2)
    }
  }

  return (
    <RetroSection title="CLIENT-SIDE CALCULATOR">
      <div className="p-6 border-4 border-[#2c1810] bg-[#f8f3e7] font-mono rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          SIMPLE ADDITION CALCULATOR
        </h2>
        <div className="space-y-4 flex flex-col items-center">
          <input
            type="number"
            value={input1 ?? ""}
            onChange={(e) => setInput1(Number(e.target.value))}
            className="p-2 border-2 border-[#2c1810] rounded-md w-full max-w-xs"
            placeholder="Enter first number"
          />
          <input
            type="number"
            value={input2 ?? ""}
            onChange={(e) => setInput2(Number(e.target.value))}
            className="p-2 border-2 border-[#2c1810] rounded-md w-full max-w-xs"
            placeholder="Enter second number"
          />
          <button
            onClick={handleCalculate}
            className="px-4 py-2 bg-[#2c1810] text-[#f8f3e7] font-bold rounded-md hover:bg-[#3a2a1a] transition-colors duration-200"
          >
            Calculate
          </button>
          {result !== null && (
            <div className="p-4 border-2 border-[#2c1810] rounded-md bg-[#f8f3e7] text-center">
              <h2 className="text-4xl font-bold">RESULT: {result}</h2>
            </div>
          )}
        </div>
      </div>
    </RetroSection>
  )
}
