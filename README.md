# UrbanBlooms - Fresh Flowers Subscription Website

A beautiful and modern flower subscription e-commerce website built with Next.js 16, TypeScript, and Tailwind CSS. This is a replica of the Phulwaa website, rebranded as **UrbanBlooms**.

## 🌸 Features

- **Homepage** with hero section, trending subscriptions, and product showcases
- **Product Pages** with image galleries, variant selection (weight, duration), and detailed information
- **Collection Pages** for Pooja Flowers and Cut Flowers with filtering and sorting
- **Static Pages**: About Us, Contact Us, and more
- **Responsive Design** - Mobile-first approach with beautiful UI
- **Real Flower Images** from Unsplash
- **WhatsApp Integration** for customer support
- **Subscription-based** product model with daily/monthly options

## 🚀 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 3.4**
- **React 19**

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Access

- **Local Development**: http://localhost:3000
- **Production**: Deploy to Vercel, Netlify, or any Node.js hosting platform

## 📁 Project Structure

```
urbanbloom/
├── app/
│   ├── layout.tsx              # Root layout with Header and Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── collections/
│   │   └── [slug]/
│   │       └── page.tsx        # Collection pages (pooja-flowers, cut-flowers)
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx        # Individual product pages
│   └── pages/
│       ├── about-us/page.tsx   # About Us page
│       └── contact/page.tsx    # Contact page
├── components/
│   ├── Header.tsx              # Main navigation header
│   ├── Footer.tsx              # Footer with links and social media
│   ├── ProductCard.tsx         # Reusable product card component
│   └── ProductDetail.tsx       # Product detail component with gallery
├── data/
│   └── products.ts             # Product data and types
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Color Scheme

The website uses the same purple/pink color palette as the original:
- **Primary Purple**: `#8B4789`
- **Secondary Pink**: `#C85C8C`
- **Accent Light**: `#F4A5D7`

## 📝 Product Data

All products are stored in `data/products.ts` with the following structure:
- Product name, brand (UrbanBlooms), pricing
- Multiple images from Unsplash
- Category (pooja/cut/decor)
- Weight and duration options
- Detailed descriptions and specifications

## 🛠️ Key Components

### Header
- Announcement banner with promotional message
- Logo and navigation
- Account and Cart links
- Mobile-responsive menu

### Footer
- Social media links (Facebook, LinkedIn, YouTube, Pinterest, Instagram)
- Information, Useful Links, and About Us sections
- Copyright notice
- WhatsApp floating button

### Product Card
- Product image with hover effects
- Product name and brand
- Pricing with per-day cost
- Links to product detail page

### Product Detail
- Image gallery with thumbnail navigation
- Weight and duration selectors
- Stock status indicator
- Add to cart functionality
- Collapsible sections for description, how it works, and shipping
- Related products section

## 🌟 Pages

1. **Homepage** (`/`)
   - Hero section with call-to-action
   - Trending subscriptions
   - Key perks section
   - Product showcases
   - Testimonials

2. **Collection Pages** (`/collections/pooja-flowers`, `/collections/cut-flowers`)
   - Product grid with sorting options
   - Category descriptions
   - Pagination support

3. **Product Pages** (`/products/[id]`)
   - Detailed product information
   - Image gallery
   - Variant selection
   - Add to cart functionality
   - Related products

4. **Static Pages**
   - About Us
   - Contact Us (with contact form)
   - FAQs, Privacy Policy, Shipping Policy, etc.

## 📱 Contact Information

- **Phone**: +91-9175457576
- **WhatsApp**: Integrated floating button
- **Email**: contact@phulwaa.com
- **Service Areas**: Pune & Mumbai

## 🎯 Future Enhancements

- Shopping cart functionality
- User authentication
- Subscription management dashboard
- Payment integration
- Order tracking
- Admin panel for product management

## 📄 License

© 2024, TWINSPIRATION BLOOMS PRIVATE LIMITED

---

Built with ❤️ using Next.js and Tailwind CSS

