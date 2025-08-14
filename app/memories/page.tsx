"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Camera } from "lucide-react"

export default function MemoriesPage() {
  const router = useRouter()

  const memories = [
    {
      date: "Every Laugh",
      text: "Your laughter fills my heart with pure joy and makes every day brighter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.03_004ea067.jpg-JchIrEqarzpZEj3UfUjp2xcDV3wIKY.jpeg",
    },
    {
      date: "Every Embrace",
      text: "In your arms, I've found my home and my peace",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.05_d6da0ac1.jpg-fuHADrG0Ncuhb5Jt7K3VVIXUSp9GGd.jpeg",
    },
    {
      date: "Every Adventure",
      text: "Exploring the world with you makes every moment an unforgettable memory",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.04_001f2161.jpg-m7P8q468qzeiiFAAyQKSuh4n9fOUWn.jpeg",
    },
    {
      date: "Every Day",
      text: "I love spending every single moment with you, my beautiful soul",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.03_e68fa01b.jpg-b4waUPtYYm8po5TodKY3gkzweE9Fhf.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 py-8 px-4 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              fontSize: `${8 + Math.random() * 6}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Camera className="w-16 h-16 text-pink-400 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-pink-300 mb-4">Our Beautiful Journey</h2>
          <p className="text-lg text-gray-300">Every moment with you is a treasure ✨</p>
        </div>

        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ${
                index % 2 === 1 ? "md:flex-row-reverse md:space-x-reverse" : ""
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 w-full">
                <Card className="p-6 bg-gray-800/80 backdrop-blur-sm border-pink-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-serif text-pink-300 mb-2">{memory.date}</h3>
                  <p className="text-gray-200 text-lg">{memory.text}</p>
                </Card>
              </div>
              <div className="flex-shrink-0">
                <div className="polaroid-frame-small">
                  <img src={memory.image || "/placeholder.svg"} alt={memory.date} className="w-40 h-30 object-cover" />
                  <div className="p-2 bg-white text-center">
                    <p className="font-serif text-gray-600 text-sm">{memory.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => router.push("/gallery")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg"
          >
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            View Photo Gallery →
          </Button>
        </div>

        <div className="text-center mt-8 p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-pink-500/30">
          <p className="text-pink-300 font-serif text-lg">Thank you for being part of my story 💕</p>
        </div>
      </div>
    </div>
  )
}
