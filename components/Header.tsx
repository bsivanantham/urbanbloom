'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header>
      {/* Announcement Banner */}
      <div className="bg-purple-100 text-sm py-3 px-4 overflow-hidden">
        <div className="flex items-center justify-center gap-8 animate-scroll">
          <span>Get 10% off on your first month's subscription with the First10 code.</span>
          <span>
            To know more, call{' '}
            <a href="tel:9175457576" className="underline">
              @ +91-9175457576.
            </a>
          </span>
          <span>Now live in Pune and Mumbai</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search Button Mobile */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Open search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/" className="flex items-center">
                <h1 className="text-3xl font-bold text-purple-700">UrbanBlooms</h1>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Link href="/account" className="flex items-center gap-2 hover:text-purple-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden sm:inline text-sm">Account</span>
              </Link>
              <Link href="/cart" className="flex items-center gap-2 hover:text-purple-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="hidden sm:inline text-sm">Cart</span>
              </Link>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="border-t border-gray-200">
            <div className="hidden lg:flex items-center justify-between py-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
                  Home
                </Link>
                <Link href="/collections/pooja-flowers" className="text-sm font-medium hover:text-purple-700 transition-colors">
                  Pooja Flowers
                </Link>
                <Link href="/collections/cut-flowers" className="text-sm font-medium hover:text-purple-700 transition-colors">
                  Cut Flowers
                </Link>
                <Link href="/pages/intimate-home-decor" className="text-sm font-medium hover:text-purple-700 transition-colors">
                  Intimate Home Decor
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/pages/how-subscription-works" className="hover:text-purple-700 transition-colors">
                  How does Subscription work?
                </Link>
                <Link href="/pages/about-us" className="hover:text-purple-700 transition-colors">
                  About Us
                </Link>
                <Link href="/pages/contact" className="hover:text-purple-700 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Home
              </Link>
              <Link href="/collections/pooja-flowers" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Pooja Flowers
              </Link>
              <Link href="/collections/cut-flowers" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Cut Flowers
              </Link>
              <Link href="/pages/intimate-home-decor" className="text-sm font-medium hover:text-purple-700 transition-colors">
                Intimate Home Decor
              </Link>
              <hr className="border-gray-200" />
              <Link href="/pages/how-subscription-works" className="text-sm hover:text-purple-700 transition-colors">
                How does Subscription work?
              </Link>
              <Link href="/pages/about-us" className="text-sm hover:text-purple-700 transition-colors">
                About Us
              </Link>
              <Link href="/pages/contact" className="text-sm hover:text-purple-700 transition-colors">
                Contact Us
              </Link>
              <Link href="/pages/faq" className="text-sm hover:text-purple-700 transition-colors">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <input
              type="search"
              placeholder="Search for flowers..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      )}
    </header>
  )
}

