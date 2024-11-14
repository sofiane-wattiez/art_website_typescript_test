import { useState } from 'react'

interface Painting {
  id: number
  title: string
  price: number
  image: string
  description: string
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Coucher de Soleil",
    price: 299,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
    description: "Une magnifique peinture de coucher de soleil"
  },
  {
    id: 2,
    title: "Paysage Montagneux",
    price: 399,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
    description: "Vue impressionnante sur les montagnes"
  }
]

export default function Shop() {
  const [cart, setCart] = useState<Painting[]>([])

  const addToCart = (painting: Painting) => {
    setCart([...cart, painting])
  }

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Notre Boutique</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paintings.map((painting) => (
          <div key={painting.id} className="animate-slide-up">
            <div className="p-1 animate-border">
              <div className="bg-white rounded-lg overflow-hidden">
                <img src={painting.image} alt={painting.title} className="w-full h-48 object-cover transform transition-transform hover:scale-105" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                    {painting.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{painting.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-indigo-600">{painting.price}€</span>
                    <button
                      onClick={() => addToCart(painting)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transform transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}