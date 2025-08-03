# Kubwa Tano Tours Website

A luxury safari tour company website showcasing Kenya's premier wildlife experiences and cultural adventures. Built with modern web technologies for optimal performance and user experience.

## About Kubwa Tano Tours

Kubwa Tano Tours is Kenya's leading luxury safari company, founded by Ayodhika with a vision to share the breathtaking beauty and rich cultural heritage of Kenya with travelers worldwide. "Kubwa Tano" means "Big Five" in Swahili, representing our commitment to showcasing Africa's most magnificent wildlife.

### Our Mission

- **Luxury Experiences**: Premium accommodations and personalized service
- **Cultural Authenticity**: Genuine connections with local communities
- **Wildlife Conservation**: Supporting Kenya's natural heritage
- **Expert Guidance**: Knowledgeable local guides with years of experience

## Website Features

### 🏠 Homepage

- **Hero Section**: Stunning visuals with call-to-action
- **About Section**: Company story and statistics (500+ happy travelers, 15+ years experience)
- **Tour Packages**: Curated safari experiences gallery
- **Services Carousel**: Comprehensive service offerings
- **Testimonials**: Customer reviews and experiences
- **Contact Form**: Direct communication with the team

### 🦁 Safari Packages

- **Maasai Mara Safari** - $2,500
- **Cultural Heritage Tour** - $1,800
- **Mount Kenya Adventure** - $2,200
- **Luxury Beach Retreat** - $3,200
- **Samburu Cultural Experience** - $1,950
- **Rift Valley Expedition** - $2,100
- **Custom Packages** - Tailored experiences

### 📱 Key Pages

- **Home**: Complete overview with all sections
- **About Us**: Company story, values, and founder information
- **Booking**: Comprehensive booking form with tour selection
- **Tour Details**: Individual tour information pages
- **404 Page**: Custom not found page

### 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Lazy loading, image optimization, code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Smooth Animations**: Framer Motion for engaging interactions

## Technical Stack

### Frontend Framework

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation

### Styling & UI

- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** components for consistent design
- **Framer Motion** for animations
- **Lucide React** for icons

### Performance Features

- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: Custom OptimizedImage component
- **Performance Monitoring**: Custom usePerformance hook
- **Resource Preloading**: Critical resource optimization
- **Intersection Observer**: Efficient scroll-based animations

### Development Tools

- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** with Autoprefixer
- **VS Code** configuration included

## Performance Optimizations

### Core Web Vitals Monitoring

- **Largest Contentful Paint (LCP)** tracking
- **First Input Delay (FID)** measurement
- **Cumulative Layout Shift (CLS)** monitoring
- **Long Task** detection and logging

### Image Optimization

- Lazy loading for non-critical images
- WebP format support with fallbacks
- Responsive image sizing
- Priority loading for hero images

### Code Optimization

- Component lazy loading
- Bundle splitting
- Tree shaking
- Minification and compression

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd kubwa-tano-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── HeroSection.tsx # Homepage hero
│   ├── home.tsx        # Main homepage component
│   └── ...
├── pages/              # Route components
│   ├── AboutUs.tsx     # About page
│   ├── Booking.tsx     # Booking form
│   └── ...
├── hooks/              # Custom React hooks
│   └── usePerformance.ts
├── utils/              # Utility functions
│   ├── performance.ts
│   └── imagePreloader.ts
├── styles/             # Additional CSS files
└── App.tsx            # Main application component
```

## Contact Information

### Kubwa Tano Tours

- **Email**: <info@kubwatanotours.com>
- **Phone**: +254 123 456 789
- **Location**: Nairobi, Kenya

### Social Media

- **Facebook**: [@kubwatano.tours](https://www.facebook.com/kubwatano.tours/)
- **Instagram**: [@kubwatanotours](https://www.instagram.com/kubwatanotours)
- **TikTok**: [@kubwa.tano.tours](https://www.tiktok.com/@kubwa.tano.tours)
- **Pinterest**: [Kubwa Tano](https://www.pinterest.com/lathasrinagesh/kubwa-tano/)

### Founder

- **Ayodhika** - Founder & CEO
- **Instagram**: [@ayodhika_](https://www.instagram.com/ayodhika_)

## Contributing

This is a commercial website for Kubwa Tano Tours. For development contributions or technical inquiries, please contact the development team.

## License

© 2025 Kubwa Tano Tours. All rights reserved.

---

*Experience the magic of Kenya with our luxury safari adventures. Book your journey today!*
