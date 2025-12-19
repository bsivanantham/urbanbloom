import Link from 'next/link'

export default function AboutUs() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Learn more about our mission and values
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Experience the UrbanBlooms Difference</h2>
            <p className="text-lg text-gray-700 mb-6">
              When you choose UrbanBlooms, you're not just buying flowers; you're supporting a movement. A movement that honors tradition, empowers women, and uplifts our farmers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Let us be a part of your sacred rituals, and experience the beauty, purity, and care that UrbanBlooms delivers with every order.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              To bring fresh, handpicked flowers directly from our farms to your doorstep, ensuring the highest quality and freshness for your daily pooja and home decoration needs.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
              <li>Freshness Guaranteed</li>
              <li>Supporting Local Farmers</li>
              <li>Empowering Women</li>
              <li>Honoring Tradition</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

