"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import ImageUpload from "@/components/ImageUpload"
import OriginalImage from "@/components/OriginalImage"
import EnhancedImage from "@/components/EnhancedImage"

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null)
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [fileName, setFileName] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setOriginalImage(URL.createObjectURL(file))
    }
  }

  const enhanceImage = async () => {
    if (!originalImage) return

    setIsEnhancing(true)

    // Simulate AI enhancement process
    // In a real app, you would call your AI service here
    setTimeout(() => {
      setEnhancedImage(originalImage)
      setIsEnhancing(false)
    }, 2000)
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center">
            EnhanceAI
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Upload an image and let our AI enhance it to make it look better.
          </p>
        </div>

        <div className="w-full max-w-3xl">
          <ImageUpload
            handleImageUpload={handleImageUpload}
            fileName={fileName}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original Image Card */}
            <OriginalImage originalImage={originalImage} />

            {/* Enhanced Image Card */}
            <EnhancedImage
              isEnhancing={isEnhancing}
              enhancedImage={enhancedImage}
              fileName={fileName}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button
              onClick={enhanceImage}
              disabled={!originalImage || isEnhancing || enhancedImage !== null}
              className="w-full max-w-xs"
            >
              {isEnhancing ? (
                <>Processing...</>
              ) : enhancedImage ? (
                <>Enhancement Complete</>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enhance Image
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

