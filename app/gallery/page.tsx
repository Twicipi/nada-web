import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/images/nadaAnime.jpg', alt: 'Image 1' },
    { src: '/images/nadaKonser.mp4', alt: 'Video 1', isVideo: true },
    { src: '/images/nadaGambar.jpg', alt: 'Image 3' },
    { src: '/images/nadaBunga.jpg', alt: 'Image 4' },
    { src: '/placeholder.svg', alt: 'Image 5' },
    { src: '/placeholder.svg', alt: 'Image 6' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-400">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div key={index} className="relative aspect-square">
              {item.isVideo ? (
                <video controls className="rounded-lg shadow-lg object-cover w-full h-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
