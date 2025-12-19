import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const collectionMap: { [key: string]: { title: string; category: 'pooja' | 'cut'; description: string } } = {
  'pooja-flowers': {
    title: 'Pooja Flowers Subscription',
    category: 'pooja',
    description: 'Bring purity to your rituals with handpicked, farm-fresh pooja flowers, ensuring freshness and divine essence for every offering.'
  },
  'cut-flowers': {
    title: 'Cut Flowers Subscription',
    category: 'cut',
    description: 'Enhance your home decor with fresh cut flowers and more.'
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = collectionMap[slug]

  if (!collection) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Collection Not Found</h1>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  const categoryProducts = products.filter(p => p.category === collection.category)

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-purple-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/collections/${slug}`} className="text-gray-600 hover:text-purple-700">
              {collection.title}
            </Link>
          </nav>
        </div>
      </div>

      {/* Collection Header */}
      <section className="py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{collection.title}</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">{collection.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-600">
              {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="featured">Featured</option>
                <option value="best-selling">Best selling</option>
                <option value="alphabetically-az">Alphabetically, A-Z</option>
                <option value="alphabetically-za">Alphabetically, Z-A</option>
                <option value="price-low-high">Price, low to high</option>
                <option value="price-high-low">Price, high to low</option>
                <option value="date-old-new">Date, old to new</option>
                <option value="date-new-old">Date, new to old</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {categoryProducts.length > 12 && (
            <nav className="flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Other Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Other Collections</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/collections/pooja-flowers"
              className="px-6 py-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              Pooja Flowers Subscription
            </Link>
            <Link
              href="/collections/cut-flowers"
              className="px-6 py-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              Cut Flowers Subscription
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
