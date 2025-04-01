import EnhanceSection from "@/components/EnhanceSection"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 via-purple-600 to-indigo-300 text-transparent bg-clip-text">
            EnhanceAI
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Upload an image and let our AI enhance it to make it look better.
          </p>
        </div>

        <EnhanceSection />
      </div>
    </main>
  )
}

