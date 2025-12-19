import Link from 'next/link'
import { products, getProductById } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

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
            <Link href={`/collections/${product.category === 'pooja' ? 'pooja-flowers' : 'cut-flowers'}`} className="text-gray-600 hover:text-purple-700">
              {product.category === 'pooja' ? 'Pooja Flowers Subscription' : 'Cut Flowers Subscription'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <ProductDetail product={product} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                I'm very new to flower subscriptions but I am really liking it. It makes it so easy to get my pooja flowers everyday. Your assorted collection is my favourite.
              </p>
              <p className="font-semibold">Mrs. Parvati More</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Being a working professional, I never had time to source fresh flowers for daily pooja. UrbanBlooms solved this perfectly. Their subscription service is reliable, flowers are fresh, and the team is very professional. Exactly what I needed.
              </p>
              <p className="font-semibold">Pankaj Dubey</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                I love decorating my home with fresh flowers but getting them regularly from florist was a task. But since I started UrbanBlooms subscription for home decor flowers, I am very happy. Guys if you want, you can also start.
              </p>
              <p className="font-semibold">Shrushti Sardesai</p>
            </div>
          </div>
        </div>
      </section>

      {/* You might also like */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">You might also like these</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link href={`/collections/${product.category === 'pooja' ? 'pooja-flowers' : 'cut-flowers'}`} className="btn-primary">
                View all
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
