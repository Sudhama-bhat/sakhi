"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

export default function PreloaderPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 30) // Updates every 30ms for smooth animation

    const timer = setTimeout(() => {
      router.push("/gateway")
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [router])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((i) => (
            <Heart
              key={i}
              className="w-8 h-8 text-pink-400 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
              fill="currentColor"
            />
          ))}
        </div>
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Creating Magic</h1>
        <p className="text-lg text-pink-200 animate-pulse">A beautiful surprise is loading... ✨</p>

        <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-pink-300 mt-4 text-sm">{progress}%</p>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${8 + Math.random() * 6}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>
    </div>
  )
}
