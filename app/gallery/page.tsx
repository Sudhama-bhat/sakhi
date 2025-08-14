"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.04_001f2161.jpg-m7P8q468qzeiiFAAyQKSuh4n9fOUWn.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.05_d6da0ac1.jpg-fuHADrG0Ncuhb5Jt7K3VVIXUSp9GGd.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.03_004ea067.jpg-JchIrEqarzpZEj3UfUjp2xcDV3wIKY.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.04_96b50288.jpg-eB6dxrG9kbig6byK6ZLMB4mspNrysb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.03_e68fa01b.jpg-b4waUPtYYm8po5TodKY3gkzweE9Fhf.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.04_74d60b98.jpg-QTMvHTlRaCMAPfYn5MUEIm1DM2vIRW.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-14%20at%2023.09.02_e8b3391c.jpg-q1mZpqVdCvJbLdi1wYA0KMhMn1pzD8.jpeg",
  ]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 py-8 px-4 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float opacity-40"
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

      <div className="max-w-4xl mx-auto text-center relative z-10 min-h-screen flex flex-col justify-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-heartbeat" fill="currentColor" />
          <h2 className="text-3xl font-serif text-pink-300 mb-4">Our Beautiful Journey</h2>
          <p className="text-lg text-gray-300">Every moment with you is a treasure ✨</p>
        </div>

        <div className="relative mb-8">
          <div className="flex justify-center">
            <div className="polaroid-frame transform hover:rotate-2 transition-transform duration-300">
              <img
                src={photos[currentPhotoIndex] || "/placeholder.svg"}
                alt={`Beautiful Memory ${currentPhotoIndex + 1}`}
                className="w-80 h-60 object-cover"
              />
              <div className="p-4 bg-white text-center">
                <p className="font-serif text-gray-600">Beautiful Memory #{currentPhotoIndex + 1}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-pink-500/80 hover:bg-pink-600 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          <Button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-pink-500/80 hover:bg-pink-600 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>
        </div>

        {/* Photo indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhotoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPhotoIndex ? "bg-pink-400 scale-125" : "bg-pink-600/50"
              }`}
            />
          ))}
        </div>

        <div className="p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-pink-500/30">
          <p className="text-pink-300 font-serif text-lg">Thank you for being part of my story 💕</p>
        </div>
      </div>
    </div>
  )
}
