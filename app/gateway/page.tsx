"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Lock } from "lucide-react"

export default function GatewayPage() {
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [heartStates, setHeartStates] = useState<("empty" | "filled" | "burst")[]>(["empty", "empty", "empty", "empty"])
  const router = useRouter()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    const newHeartStates: ("empty" | "filled" | "burst")[] = ["empty", "empty", "empty", "empty"]
    for (let i = 0; i < Math.min(newPassword.length, 4); i++) {
      newHeartStates[i] = "filled"
    }
    setHeartStates(newHeartStates)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "1523") {
      router.push("/intro")
    } else {
      setPasswordError(true)
      setHeartStates(["burst", "burst", "burst", "burst"])

      setTimeout(() => {
        setPasswordError(false)
        setHeartStates(["empty", "empty", "empty", "empty"])
        setPassword("")
      }, 1000)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Card
        className={`p-8 bg-gray-800/90 backdrop-blur-sm border-pink-500/30 shadow-2xl max-w-md w-full mx-4 ${passwordError ? "animate-shake" : ""}`}
      >
        <div className="text-center">
          <div className="mb-6">
            <Lock className="w-16 h-16 text-pink-400 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-serif text-pink-300 mb-2">Secret Gateway</h2>
          <p className="text-gray-300 mb-2">Enter the code to unlock my heart 💕</p>
          <p className="text-sm text-yellow-300 mb-6">💡 Hint: Three numbers that mean 'I Love You'</p>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {heartStates.map((state, i) => (
                <div key={i} className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center relative">
                  <Heart
                    className={`w-6 h-6 transition-all duration-300 ${
                      state === "empty"
                        ? "text-gray-500"
                        : state === "filled"
                          ? "text-pink-400 animate-pulse"
                          : "text-red-500 animate-ping"
                    }`}
                    fill={state === "filled" ? "currentColor" : "none"}
                  />
                  {state === "burst" && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-1 h-1 bg-red-400 rounded-full animate-burst-particle"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: `translate(-50%, -50%) rotate(${j * 60}deg) translateY(-20px)`,
                            animationDelay: `${j * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="text-center text-lg bg-gray-700 border-pink-500/30 text-white focus:border-pink-400"
              placeholder="Enter code"
              maxLength={4}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full py-3"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Unlock My Heart
            </Button>
          </form>

          {passwordError && <div className="mt-4 text-pink-400 animate-pulse">Try again... 💔</div>}
        </div>
      </Card>
    </div>
  )
}
