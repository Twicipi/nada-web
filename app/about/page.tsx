import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-400">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Story</h2>
            <p className="text-lg mb-4">
            YOU STILL IN KALIMANTAN, WE HAVEN'T MET YET SO I DUNNO WHAT TO WRITE HERE. But, I'm blessed, I'm so happy to know you Nad.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/placeholder.svg"
              alt="A photo of us" 
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

