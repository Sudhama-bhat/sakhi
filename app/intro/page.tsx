"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function IntroPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top scattered hearts */}
        {[...Array(8)].map((_, i) => (
          <Heart
            key={`top-${i}`}
            className="absolute text-pink-300 animate-gentle-float opacity-30"
            style={{
              left: `${15 + i * 10}%`,
              top: `${5 + Math.random() * 15}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: "12px",
            }}
            fill="currentColor"
          />
        ))}

        {/* Bottom scattered hearts */}
        {[...Array(6)].map((_, i) => (
          <Heart
            key={`bottom-${i}`}
            className="absolute text-pink-300 animate-gentle-float opacity-25"
            style={{
              left: `${20 + i * 12}%`,
              top: `${75 + Math.random() * 15}%`,
              animationDelay: `${i * 1.2}s`,
              fontSize: "10px",
            }}
            fill="currentColor"
          />
        ))}

        {/* Side accent hearts */}
        <Heart
          className="absolute text-pink-400 animate-gentle-float opacity-40 left-8 top-1/3"
          style={{ animationDelay: "2s", fontSize: "16px" }}
          fill="currentColor"
        />
        <Heart
          className="absolute text-pink-400 animate-gentle-float opacity-40 right-8 top-2/3"
          style={{ animationDelay: "3s", fontSize: "14px" }}
          fill="currentColor"
        />
      </div>

      <div className="text-center z-10 max-w-lg">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-heartbeat" fill="currentColor" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-pink-300 mb-6 animate-fade-in">
          I've been hiding something sweet...
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          There's a little secret I've been saving for the right moment. Want to know what it is? 💕
        </p>

        <Button
          onClick={() => router.push("/letter")}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
        >
          <Heart className="w-5 h-5 mr-2" fill="currentColor" />
          Show me 💕
        </Button>
      </div>
    </div>
  )
}
