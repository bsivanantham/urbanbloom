import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h3 className="font-medium text-lg group-hover:text-purple-700 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-gray-500">Regular price</span>
            <span className="font-semibold text-lg">
              From ₹ {product.price.toLocaleString('en-IN')} (₹ {product.pricePerDay}/day)
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

