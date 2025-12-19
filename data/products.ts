export interface Product {
  id: string
  name: string
  brand: string
  price: number
  pricePerDay: number
  image: string
  images: string[]
  category: 'pooja' | 'cut' | 'decor'
  description: string
  weight: string[]
  duration: string[]
  typeOfFlower: string
  idealUse: string
  noOfStems: string
  deliveredBetween: string
}

export const products: Product[] = [
  {
    id: 'pooja-mix',
    name: 'Pooja Mix',
    brand: 'UrbanBlooms',
    price: 1799,
    pricePerDay: 60,
    image: '/images/products/pooja-mix.svg',
    images: [
      '/images/products/pooja-mix.svg',
      '/images/products/mixed-flower.svg',
      '/images/products/mixed-marigold.svg'
    ],
    category: 'pooja',
    description: 'A collection of fresh roses in multiple colors, symbolizing love, purity, and divine beauty. Ideal for pooja, rituals, or as gentle décor around your home. Each bloom is carefully chosen for its softness and freshness. Their fragrance uplifts the senses and adds grace to every space. Perfect for both devotion and decoration.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Mixed Flowers',
    idealUse: 'Pooja, Home Decor',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'red-rose-buds',
    name: 'Red Rose Buds',
    brand: 'UrbanBlooms',
    price: 2099,
    pricePerDay: 70,
    image: '/images/products/red-rose-buds.svg',
    images: [
      '/images/products/red-rose-buds.svg',
      '/images/products/red-rose.svg',
      '/images/products/pooja-mix.svg'
    ],
    category: 'pooja',
    description: 'Fresh red rose buds, perfect for religious ceremonies and decorations. Symbolizing love and devotion.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Red Rose Buds',
    idealUse: 'Pooja, Rituals',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'mixed-flower',
    name: 'Mixed Flower',
    brand: 'UrbanBlooms',
    price: 1749,
    pricePerDay: 59,
    image: '/images/products/mixed-flower.svg',
    images: [
      '/images/products/mixed-flower.svg',
      '/images/products/pooja-mix.svg',
      '/images/products/mixed-marigold.svg'
    ],
    category: 'pooja',
    description: 'A beautiful mix of fresh flowers including aster and rajnigandha for your daily pooja needs.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Mixed Aster & Rajnigandha',
    idealUse: 'Pooja, Home Decor',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'mixed-marigold',
    name: 'Mixed Marigold',
    brand: 'UrbanBlooms',
    price: 1699,
    pricePerDay: 57,
    image: '/images/products/mixed-marigold.svg',
    images: [
      '/images/products/mixed-marigold.svg',
      '/images/products/marigold-yellow.svg',
      '/images/products/marigold-orange.svg'
    ],
    category: 'pooja',
    description: 'Vibrant mixed marigold flowers in yellow and orange, perfect for traditional ceremonies.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Mixed Marigold',
    idealUse: 'Pooja, Decoration',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'marigold-yellow',
    name: 'Marigold Yellow',
    brand: 'UrbanBlooms',
    price: 1599,
    pricePerDay: 54,
    image: '/images/products/marigold-yellow.svg',
    images: [
      '/images/products/marigold-yellow.svg',
      '/images/products/mixed-marigold.svg',
      '/images/products/yellow-shevanti.svg',
      '/images/products/marigold-orange.svg'
    ],
    category: 'pooja',
    description: 'Bright yellow marigold flowers, symbolizing positivity and auspiciousness. Perfect for daily pooja.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Marigold Yellow',
    idealUse: 'Pooja Home Decor',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'marigold-orange',
    name: 'Marigold Orange',
    brand: 'UrbanBlooms',
    price: 1599,
    pricePerDay: 54,
    image: '/images/products/marigold-orange.svg',
    images: [
      '/images/products/marigold-orange.svg',
      '/images/products/mixed-marigold.svg',
      '/images/products/marigold-yellow.svg'
    ],
    category: 'pooja',
    description: 'Vibrant orange marigold flowers, bringing energy and enthusiasm to your sacred space.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Marigold Orange',
    idealUse: 'Pooja, Decoration',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'mixed-shevanti',
    name: 'Mixed Shevanti',
    brand: 'UrbanBlooms',
    price: 2199,
    pricePerDay: 74,
    image: '/images/products/mixed-shevanti.svg',
    images: [
      '/images/products/mixed-shevanti.svg',
      '/images/products/white-shevanti.svg',
      '/images/products/yellow-shevanti.svg'
    ],
    category: 'pooja',
    description: 'Beautiful mixed chrysanthemum flowers in various colors for your daily worship.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Mixed Shevanti (Chrysanthemum)',
    idealUse: 'Pooja, Rituals',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'white-shevanti',
    name: 'White Shevanti',
    brand: 'UrbanBlooms',
    price: 2099,
    pricePerDay: 70,
    image: '/images/products/white-shevanti.svg',
    images: [
      '/images/products/white-shevanti.svg',
      '/images/products/mixed-shevanti.svg',
      '/images/products/yellow-shevanti.svg'
    ],
    category: 'pooja',
    description: 'Pure white chrysanthemum flowers, symbolizing peace and tranquility.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'White Shevanti (Chrysanthemum)',
    idealUse: 'Pooja, Meditation',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'yellow-shevanti',
    name: 'Yellow Shevanti',
    brand: 'UrbanBlooms',
    price: 2099,
    pricePerDay: 70,
    image: '/images/products/yellow-shevanti.svg',
    images: [
      '/images/products/yellow-shevanti.svg',
      '/images/products/mixed-shevanti.svg',
      '/images/products/white-shevanti.svg'
    ],
    category: 'pooja',
    description: 'Bright yellow chrysanthemum flowers, bringing positivity to your worship space.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Yellow Shevanti (Chrysanthemum)',
    idealUse: 'Pooja, Home Decor',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'purple-shevanti',
    name: 'Purple Shevanti',
    brand: 'UrbanBlooms',
    price: 2099,
    pricePerDay: 70,
    image: '/images/products/purple-shevanti.svg',
    images: [
      '/images/products/purple-shevanti.svg',
      '/images/products/mixed-shevanti.svg',
      '/images/products/white-shevanti.svg'
    ],
    category: 'pooja',
    description: 'Elegant purple chrysanthemum flowers for a unique and beautiful offering.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Purple Shevanti (Chrysanthemum)',
    idealUse: 'Pooja, Decoration',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'kapri',
    name: 'Kapri',
    brand: 'UrbanBlooms',
    price: 1999,
    pricePerDay: 67,
    image: '/images/products/kapri.svg',
    images: [
      '/images/products/kapri.svg',
      '/images/products/pooja-mix.svg',
      '/images/products/mixed-flower.svg'
    ],
    category: 'pooja',
    description: 'Traditional kapri flowers, perfect for religious ceremonies and rituals.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Kapri',
    idealUse: 'Pooja, Rituals',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'marigold-shevanti',
    name: 'Marigold & Shevanti',
    brand: 'UrbanBlooms',
    price: 1799,
    pricePerDay: 60,
    image: '/images/products/marigold-shevanti.svg',
    images: [
      '/images/products/marigold-shevanti.svg',
      '/images/products/mixed-marigold.svg',
      '/images/products/mixed-shevanti.svg'
    ],
    category: 'pooja',
    description: 'A perfect combination of marigold and chrysanthemum flowers for complete pooja needs.',
    weight: ['80g', '200g'],
    duration: ['1 month', '3 months', '6 months'],
    typeOfFlower: 'Marigold & Shevanti',
    idealUse: 'Pooja, Complete Worship',
    noOfStems: '80gms / 200gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'red-rose-flower',
    name: 'Red Rose Flower',
    brand: 'UrbanBlooms',
    price: 1599,
    pricePerDay: 53,
    image: '/images/products/red-rose.svg',
    images: [
      '/images/products/red-rose.svg',
      '/images/products/red-rose-buds.svg',
      '/images/products/pooja-mix.svg'
    ],
    category: 'cut',
    description: 'Premium red roses for home decoration and special occasions.',
    weight: ['100g', '250g'],
    duration: ['1 week', '1 month'],
    typeOfFlower: 'Red Rose',
    idealUse: 'Home Decor, Gifting',
    noOfStems: '100gms / 250gms',
    deliveredBetween: '5 AM - 8 AM'
  },
  {
    id: 'orchid-white',
    name: 'Orchid White',
    brand: 'UrbanBlooms',
    price: 3499,
    pricePerDay: 117,
    image: '/images/products/orchid-white.svg',
    images: [
      '/images/products/orchid-white.svg',
      '/images/products/white-shevanti.svg',
      '/images/products/mixed-flower.svg'
    ],
    category: 'cut',
    description: 'Elegant white orchids for sophisticated home decor.',
    weight: ['1 plant'],
    duration: ['1 week', '1 month'],
    typeOfFlower: 'White Orchid',
    idealUse: 'Home Decor, Office',
    noOfStems: '1 plant',
    deliveredBetween: '5 AM - 8 AM'
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: 'pooja' | 'cut' | 'decor'): Product[] => {
  return products.filter(p => p.category === category)
}
