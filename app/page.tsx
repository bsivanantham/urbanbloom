import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Home() {
  const poojaFlowers = products.filter(p => p.category === 'pooja').slice(0, 11)
  const cutFlowers = products.filter(p => p.category === 'cut')

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="container-custom py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4 opacity-90">Freshness Guaranteed</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enhance your pooja with fresh, handpicked flowers delivered daily. Enjoy convenience, variety, and guaranteed freshness with our monthly subscriptions.
            </h1>
            <p className="text-xl opacity-90 mb-4">Scroll down to see more</p>
            <div className="flex justify-center">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Subscriptions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Subscriptions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Fresh Flowers Subscription</h3>
                <p className="text-gray-600 mb-6">
                  Experience serenity and beauty in worship with our sacred florals.
                </p>
                <Link
                  href="/collections/pooja-flowers"
                  className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  View all products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Cut Flowers Subscription</h3>
                <p className="text-gray-600 mb-6">
                  Enhance your home decor with fresh cut flowers and more.
                </p>
                <Link
                  href="/collections/cut-flowers"
                  className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  View all products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience the Phulwaa Difference */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the UrbanBlooms Difference</h2>
            <p className="text-lg text-gray-600 mb-8">
              When you choose UrbanBlooms, you're not just buying flowers; you're supporting a movement. A movement that honors tradition, empowers women, and uplifts our farmers. Let us be a part of your sacred rituals, and experience the beauty, purity, and care that UrbanBlooms delivers with every order.
            </p>
            <Link href="/pages/about-us" className="btn-primary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Fresh Flowers Delivered */}
      <section className="py-16 bg-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Fresh Flowers Delivered to Your Doorstep</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our fresh flowers subscription and enjoy daily divine blooms at your doorstep!
          </p>
          <Link href="/collections/pooja-flowers" className="btn-primary">
            View Collection
          </Link>
        </div>
      </section>

      {/* For Every Occasion - Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">For Every Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {poojaFlowers.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Perks */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Perks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Daily Delivered</h3>
              <p className="text-sm text-gray-600">Fresh Flowers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">10% OFF First Subscription</h3>
              <p className="text-sm text-gray-600">Code LAUNCH10</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Flexible Plans</h3>
              <p className="text-sm text-gray-600">Pause, Cancel Anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Free Delivery</h3>
              <p className="text-sm text-gray-600">Across Pune above Rs. 1,000/-</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Flower Subscription */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Fresh Flower Subscription</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {poojaFlowers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/collections/pooja-flowers" className="btn-primary">
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">We'd love to hear from you</h2>
          <h3 className="text-2xl font-semibold mb-6">Call us to know more!</h3>
          <a href="tel:9175457576" className="text-3xl font-bold hover:text-purple-200 transition-colors">
            +91-9175457576
          </a>
        </div>
      </section>

      {/* Best Flower Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Best Flower Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cutFlowers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Fresh Pooja Flowers</h3>
                <Link
                  href="/collections/pooja-flowers"
                  className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  View all products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Cut Flowers</h3>
                <Link
                  href="/collections/cut-flowers"
                  className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  View all products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
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
    </main>
  )
}

