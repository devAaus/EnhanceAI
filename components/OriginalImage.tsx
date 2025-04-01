import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface OriginalImageProps {
   originalImage: string | null;
}

const OriginalImage = ({ originalImage }: OriginalImageProps) => {
   return (
      <Card className="h-full">
         <CardHeader>
            <CardTitle className="text-center">Original Image</CardTitle>
         </CardHeader>
         <CardContent className="flex items-center justify-center p-4">
            {originalImage ? (
               <div className="relative w-full aspect-[4/3] h-64">
                  <Image
                     src={originalImage || "/placeholder.svg"}
                     alt="Original image"
                     fill
                     className="object-contain rounded-md"
                  />
               </div>
            ) : (
               <div className="w-full aspect-[4/3] h-64 flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">No image selected</p>
               </div>
            )}
         </CardContent>
      </Card>
   )
}

export default OriginalImage