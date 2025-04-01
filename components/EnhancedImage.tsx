import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Download } from 'lucide-react'
import Loader from './Loader'

interface EnhancedImageProps {
   enhancedImage: string | null;
   isEnhancing: boolean;
   fileName?: string;
}

const EnhancedImage = (
   { enhancedImage, isEnhancing, fileName }: EnhancedImageProps
) => {
   return (
      <Card className="h-full">
         <CardHeader>
            <CardTitle className="text-center">Enhanced Image</CardTitle>
         </CardHeader>
         <CardContent className="flex items-center justify-center p-4">
            {enhancedImage ? (
               <div className="relative w-full aspect-[4/3] h-64">
                  <Image
                     src={enhancedImage || "/placeholder.svg"}
                     alt="Enhanced image"
                     fill
                     className="object-contain rounded-md"
                  />
               </div>
            ) :
               <div className="w-full aspect-[4/3] h-64 flex items-center justify-center bg-muted rounded-md">
                  {isEnhancing ? (
                     <Loader />
                  ) : (
                     <p className="text-muted-foreground">
                        No enhanced image yet
                     </p>
                  )}
               </div>

            }
         </CardContent>
         <CardFooter className="flex justify-center">
            {enhancedImage && (
               <a
                  href={enhancedImage}
                  download={`enhanced-${fileName || "image"}`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
               >
                  <Download className="size-4 mr-2" />
                  Download Enhanced Image
               </a>
            )}
         </CardFooter>
      </Card>
   )
}

export default EnhancedImage