import { useState } from 'react'
import './Carousel.css'
const images = [
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600',
  '/placeholder.svg?height=400&width=600'
]

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
      <section aria-label='images'>
        <div className='carousel'>
        <button id="slide-left" onClick={prevImage} onMouseEnter={prevImage}>  &#9664; </button>
          <ul style={{ transform: `translateX(${-activeIndex * 50}px)` }}>
            {images.map((src, index) => {
              const distance = Math.abs(index - activeIndex)
              let scale = 1
              if (distance === 0) scale = 1
              else if (distance === 1) scale = 0.8
              else scale = 0.6
              return (
                <li key={index}>
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className='carousel-image'
                    style={{ transform: `scale(${scale})` }}
                    onClick={() => setActiveIndex(index)}
                  />
                </li>
              )
            })}
          </ul>
          <button id="slide-right" onClick={nextImage} onMouseEnter={nextImage}> &#9654; </button>
        </div>
      </section>
    )
  //   <div className="relative w-full max-w-4xl mx-auto overflow-hidden py-10">
  //     <div className="flex justify-center items-center gap-4">
  //       {images.map((src, index) => {
  //         const distance = Math.abs(index - activeIndex)
  //         let scale = 1
  //         if (distance === 0) scale = 1
  //         else if (distance === 1) scale = 0.8
  //         else scale = 0.6

  //         return (
  //           <motion.div
  //             key={index}
  //             className="relative"
  //             initial={{ scale }}
  //             animate={{ scale }}
  //             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  //           >
  //             <motion.img
  //               src={src}
  //               alt={`Carousel image ${index + 1}`}
  //               className="w-64 h-40 object-cover rounded-lg cursor-pointer"
  //               whileHover={{ scale: 1.1 }}
  //               onHoverStart={() => setActiveIndex(index)}
  //               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  //             />
  //           </motion.div>
  //         )
  //       })}
  //     </div>
  //     <button
  //       variant="outline"
  //       size="icon"
  //       className="absolute left-4 top-1/2 transform -translate-y-1/2"
  //       onClick={prevImage}
  //       aria-label="Previous image"
  //     >
  //       <ChevronLeft className="h-4 w-4" />
  //     </button>
  //     <button
  //       variant="outline"
  //       size="icon"
  //       className="absolute right-4 top-1/2 transform -translate-y-1/2"
  //       onClick={nextImage}
  //       aria-label="Next image"
  //     >
  //       <ChevronRight className="h-4 w-4" />
  //     </button>
  //   </div>
  // )
}