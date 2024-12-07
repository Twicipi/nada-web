import Image from 'next/image'

export default function MainContent() {
  return (
    <main className="flex-grow container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">Welcome to Our Love Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Here's where you can write a beautiful message to your girlfriend. Talk about your
            journey together, your favorite memories, or your hopes for the future.
          </p>
          <p className="text-lg">
            This website is a testament to our love and a digital space for us to cherish our
            relationship.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/placeholder.svg"
            alt="A lovely photo of us"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}

