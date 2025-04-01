"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import ImageUpload from "@/components/ImageUpload"
import OriginalImage from "@/components/OriginalImage"
import EnhancedImage from "@/components/EnhancedImage"
import { enhanceAction } from "@/actions/enhanceAction"

const EnhanceSection = () => {
   const [inputFile, setInputFile] = useState<File | undefined>()
   const [originalImage, setOriginalImage] = useState<string | null>(null)
   const [enhancedImage, setEnhancedImage] = useState<string | null>(null)
   const [isEnhancing, setIsEnhancing] = useState(false)
   const [fileName, setFileName] = useState<string>("")

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
         setFileName(file.name)
         setOriginalImage(URL.createObjectURL(file))
         setInputFile(file)
      }
   }

   const enhanceImage = async () => {
      if (!originalImage) return

      setIsEnhancing(true)

      try {
         const enhancedUrl = await enhanceAction(inputFile);
         setEnhancedImage(enhancedUrl.image);
         setIsEnhancing(false);
      } catch (error) {
         console.error(error);
      }
   }
   return (
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
                  <>Enhancing...</>
               ) : enhancedImage ? (
                  <>Enhancement Complete</>
               ) : (
                  <>
                     <Sparkles className="mr-2 h-4 w-4" />
                     Enhance
                  </>
               )}
            </Button>
         </div>
      </div>
   )
}

export default EnhanceSection