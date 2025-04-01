import { Upload } from 'lucide-react'
import React from 'react'

interface ImageUploadProps {
   handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
   fileName: string;
}

const ImageUpload = (
   { handleImageUpload, fileName }: ImageUploadProps
) => {
   return (
      <div className="flex justify-center mb-8">
         <div className="relative">
            <input type="file" id="image-upload" className="sr-only" accept="image/*" onChange={handleImageUpload} />
            <label
               htmlFor="image-upload"
               className="flex items-center justify-center px-6 py-3 border-2 border-dashed rounded-lg border-gray-300 cursor-pointer hover:border-blue-800 transition-colors"
            >
               <Upload className="mr-2 h-5 w-5" />
               <span>{fileName || "Choose an image"}</span>
            </label>
         </div>
      </div>
   )
}

export default ImageUpload