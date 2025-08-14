"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, SkipForward } from "lucide-react"

export default function LetterPage() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [isSkipped, setIsSkipped] = useState(false)
  const [heartSplitting, setHeartSplitting] = useState(false)
  const router = useRouter()
  const typewriterRef = useRef<NodeJS.Timeout>()

  const romanticMessage = `My Dearest Love,

From the moment our eyes first met, I knew my life would never be the same. You walked into my world like a beautiful dream, bringing light to places I didn't even know were dark.

Every day with you feels like magic. Your smile brightens my darkest days, your laugh is the sweetest melody I've ever heard, and your love is the greatest gift I could ever receive.

I want to spend forever making you smile, forever holding your hand, forever being the reason you believe in love.

Will you be mine forever and always?

With all my love,
Your devoted heart 💕`

  useEffect(() => {
    if (letterOpen && !isSkipped && typewriterText.length < romanticMessage.length) {
      typewriterRef.current = setTimeout(() => {
        setTypewriterText(romanticMessage.slice(0, typewriterText.length + 1))
      }, 50)
    }
    return () => {
      if (typewriterRef.current) clearTimeout(typewriterRef.current)
    }
  }, [letterOpen, typewriterText, romanticMessage, isSkipped])

  const openLetter = () => {
    setHeartSplitting(true)
    setTimeout(() => {
      setLetterOpen(true)
      setTypewriterText("")
    }, 1500)
  }

  const skipToEnd = () => {
    setIsSkipped(true)
    setTypewriterText(romanticMessage)
    if (typewriterRef.current) clearTimeout(typewriterRef.current)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 py-8 px-4 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {!letterOpen ? (
          <div className="text-center min-h-screen flex flex-col items-center justify-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-8 animate-fade-in">
                My heart opens for you...✨
              </h1>
            </div>

            <div className="mb-8 relative">
              <div className="relative">
                <div
                  className={`cursor-pointer transform hover:scale-105 transition-transform ${heartSplitting ? "pointer-events-none" : ""}`}
                  onClick={openLetter}
                >
                  <Heart
                    className={`w-32 h-32 text-red-500 ${heartSplitting ? "animate-heart-split" : "animate-heart-pulse"}`}
                    fill="currentColor"
                  />
                </div>
                {heartSplitting && (
                  <>
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 text-yellow-300 animate-star-burst"
                        style={
                          {
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            "--burst-angle": `${i * 30}deg`,
                            animationDelay: `${i * 0.1}s`,
                          } as React.CSSProperties
                        }
                      >
                        ✨
                      </div>
                    ))}
                  </>
                )}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
                    style={{
                      left: `${50 + Math.cos((i * Math.PI) / 4) * 60}%`,
                      top: `${50 + Math.sin((i * Math.PI) / 4) * 60}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              className={`cursor-pointer animate-bounce-slow transform hover:scale-105 transition-transform ${heartSplitting ? "pointer-events-none opacity-50" : ""}`}
              onClick={openLetter}
            >
              <div className="w-32 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg transform rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-600" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8">
            <Card className="p-8 bg-gray-800/90 backdrop-blur-sm border-pink-500/30 shadow-2xl animate-unfold">
              <div className="text-left">
                <Heart className="w-8 h-8 text-pink-400 mb-6" fill="currentColor" />
                <div className="prose prose-lg text-gray-200 font-serif leading-relaxed">
                  <pre className="whitespace-pre-wrap font-serif text-gray-200">
                    {typewriterText}
                    {!isSkipped && typewriterText.length < romanticMessage.length && (
                      <span className="animate-pulse text-pink-400">|</span>
                    )}
                  </pre>
                </div>
              </div>
            </Card>

            {!isSkipped && typewriterText.length > 0 && typewriterText.length < romanticMessage.length && (
              <div className="text-center mt-4">
                <Button
                  onClick={skipToEnd}
                  variant="outline"
                  className="bg-transparent border-pink-400/50 text-pink-300 hover:bg-pink-400/10 px-4 py-2 rounded-full text-sm animate-fade-in"
                >
                  <SkipForward className="w-4 h-4 mr-2" />
                  Skip to End
                </Button>
              </div>
            )}

            {(typewriterText.length >= romanticMessage.length || isSkipped) && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => router.push("/memories")}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg animate-fade-in"
                >
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  View Memories →
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
