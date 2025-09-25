import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import ProductRail from "../featured-products/product-rail"
import FeaturedProducts from "../featured-products"

const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/video/sunnn-video-preview.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20">
        <span>
        <Heading
          level="h1"
          className="text-3xl leading-10 text-ui-fg-base mb-4 text-beige"
        >
          Olio Samnium
        </Heading>

        <p className="text-small whitespace-pre-line text-beige italic">
          "L'olio extravergine di Frasso Telesino, un tesoro della tradizione sannita, 
          prodotto con passione nelle nostre colline dal 1920."
        </p>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Hero
