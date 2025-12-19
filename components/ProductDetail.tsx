'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedWeight, setSelectedWeight] = useState(0)
  const [selectedDuration, setSelectedDuration] = useState(0)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false)
  const [isShippingOpen, setIsShippingOpen] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div>
        <div className="mb-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImage === idx ? 'ring-2 ring-purple-700' : ''
                }`}
              >
                <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

        <hr className="my-6" />

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm text-gray-500">Regular price</span>
            <span className="text-2xl font-bold">
              ₹ {product.price.toLocaleString('en-IN')} (₹ {product.pricePerDay}/day)
            </span>
          </div>
        </div>

        <hr className="my-6" />

        {/* Weight Options */}
        <div className="mb-6">
          <div className="mb-3">
            <span className="text-sm">Weight: </span>
            <strong>{product.weight[selectedWeight]}</strong>
          </div>
          <div className="flex gap-2">
            {product.weight.map((w, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedWeight(idx)}
                className={`px-4 py-2 rounded-md border ${
                  selectedWeight === idx
                    ? 'border-purple-700 bg-purple-50 text-purple-700'
                    : 'border-gray-300 hover:border-purple-700'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Options */}
        <div className="mb-6">
          <div className="mb-3">
            <span className="text-sm">Daily Purchase for: </span>
            <strong>{product.duration[selectedDuration]}</strong>
          </div>
          <div className="flex gap-2">
            {product.duration.map((d, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDuration(idx)}
                className={`px-4 py-2 rounded-md border ${
                  selectedDuration === idx
                    ? 'border-purple-700 bg-purple-50 text-purple-700'
                    : 'border-gray-300 hover:border-purple-700'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-6" />

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-6 text-green-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>In stock</span>
        </div>

        {/* Add to Cart Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full btn-primary">
            Add to cart to Subscribe
          </button>
          <button className="w-full btn-secondary">
            Buy it now
          </button>
        </div>

        <hr className="my-6" />

        {/* Pincode Check */}
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your pincode"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
              Check
            </button>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-1">Type of Flower</h3>
            <p className="text-sm text-gray-600">{product.typeOfFlower}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-1">Ideal Use</h3>
            <p className="text-sm text-gray-600">{product.idealUse}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-1">No of Stems</h3>
            <p className="text-sm text-gray-600">{product.noOfStems}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-1">Delivered Between</h3>
            <p className="text-sm text-gray-600">{product.deliveredBetween}</p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="border-t border-gray-200">
          <button
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
          >
            Description
            <svg
              className={`w-5 h-5 transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDescriptionOpen && (
            <div className="pb-4">
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}
        </div>

        <hr className="my-0" />

        <div className="border-t border-gray-200">
          <button
            onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
          >
            How it works ?
            <svg
              className={`w-5 h-5 transition-transform ${isHowItWorksOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isHowItWorksOpen && (
            <div className="pb-4 space-y-2 text-gray-600">
              <p>- Choose Your Plan</p>
              <p>- Schedule Daily/Weekly Delivery</p>
              <p>- Enjoy Fresh Flowers Every Day!</p>
            </div>
          )}
        </div>

        <hr className="my-0" />

        <div className="border-t border-gray-200">
          <button
            onClick={() => setIsShippingOpen(!isShippingOpen)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
          >
            Shipping and Delivery
            <svg
              className={`w-5 h-5 transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isShippingOpen && (
            <div className="pb-4 text-gray-600 space-y-3">
              <p>
                <strong>Shipping & Delivery</strong>
              </p>
              <p>
                At <strong>UrbanBlooms</strong>, we are committed to delivering fresh and fragrant pooja flowers right to your doorstep with the utmost care and efficiency.
              </p>
              <p>
                <strong>Delivery Locations:</strong> We currently offer delivery services all over Pune.
              </p>
              <p>
                <strong>Delivery Timings:</strong> We deliver every day between 6:00 AM and 10:00 AM so you receive fresh flowers for your rituals without any hassle.
              </p>
              <p>
                <strong>Shipping Charges:</strong> We offer free delivery on orders above 999/-
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

