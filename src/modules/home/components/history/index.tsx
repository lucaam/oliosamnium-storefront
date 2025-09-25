"use client"

import { Heading, Text } from "@medusajs/ui"
import { useState } from "react"

const sections = [
  {
    title: "La Nostra Storia",
    content:
      "Dal 1920, la nostra famiglia coltiva con passione gli uliveti sulle colline di Frasso Telesino, nel cuore del Sannio. Ogni generazione ha tramandato i segreti della raccolta e della spremitura a freddo, mantenendo viva una tradizione centenaria.",
    keywords: ["1920", "uliveti", "Frasso Telesino", "spremitura a freddo", "tradizione centenaria"],
  },
  {
    title: "Benefici dell'Olio Extravergine",
    content:
      "Ricco di antiossidanti naturali. Favorisce la salute cardiovascolare. Aiuta a ridurre il colesterolo cattivo. Fonte di vitamine E e K.",
    keywords: ["antiossidanti", "salute cardiovascolare", "colesterolo", "vitamine E e K"],
  },
  {
    title: "Il Nostro Frantoio",
    content:
      "Il nostro frantoio utilizza tecnologie moderne per garantire la massima qualità, senza rinunciare ai metodi tradizionali. La spremitura a freddo preserva tutte le proprietà organolettiche dell’olio.",
    keywords: ["tecnologie moderne", "qualità", "metodi tradizionali", "spremitura a freddo"],
  },
  {
    title: "Territorio e Tradizione",
    content:
      "Le colline di Frasso Telesino, con il loro microclima unico, donano alle nostre olive un sapore inconfondibile. La tradizione sannita si riflette in ogni goccia del nostro olio.",
    keywords: ["colline di Frasso Telesino", "microclima unico", "sapore inconfondibile", "tradizione sannita"],
  },
]

const carousels = [
  [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  ],
]

function emphasizeKeywords(text: string, keywords: string[]) {
  let result = text
  keywords.forEach((kw) => {
    const regex = new RegExp(`(${kw})`, "gi")
    result = result.replace(
      regex,
      `<span class="italic text-gray-700">$1</span>`
    )
  })
  return result
}

const Carousel = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0)
  return (
    <div className="flex flex-col items-center w-full min-h-[320px]"> {/* min-h per uniformare */}
      <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-2">
        <img
          src={images[idx]}
          alt=""
          className="object-cover w-full h-full transition-all duration-300"
        />
      </div>
      <div className="flex gap-2">
        <button
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setIdx((idx - 1 + images.length) % images.length)}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setIdx((idx + 1) % images.length)}
          aria-label="Next"
        >
          ›
        </button>
      </div>
      <div className="flex gap-1 mt-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${i === idx ? "bg-gray-700" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  )
}

const Section = ({ section }: { section: typeof sections[0] }) => (
  <div className="flex flex-col justify-center items-center p-12 bg-white min-h-[320px]">
    <Heading level="h2" className="text-2xl leading-10 text-ui-fg-base mb-4">
      {section.title}
    </Heading>
    <Text
      className="text-medium text-ui-fg-subtle whitespace-pre-line"
      as="div"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: emphasizeKeywords(section.content, section.keywords),
      }}
    />
  </div>
)

const HistorySections = () => {
  // Alterna sezione, carosello, sezione, carosello...
  const items: React.ReactNode[] = []
  for (let i = 0; i < Math.max(sections.length, carousels.length); i++) {
    if (sections[i]) items.push(<Section key={`section-${i}`} section={sections[i]} />)
    if (carousels[i]) items.push(
      <div key={`carousel-${i}`} className="flex flex-col justify-center items-center p-12 min-h-[320px]">
        <Carousel images={carousels[i]} />
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {items.map((item, idx) => (
          <div key={idx} className="w-full">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default HistorySections
