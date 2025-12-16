# Sri Siddheswari Peetham Website

A modern, bilingual (English/Telugu) website for Sri Siddheswari Peetham, a spiritual center located in Courtallam, Tamil Nadu, India. Built with Next.js 16 and featuring an elegant design with traditional Indian aesthetic elements.

![Sri Siddheswari Peetham](public/website-hero.png)

## 🕉️ About

Sri Siddheswari Peetham is a revered spiritual institution dedicated to preserving and propagating ancient Vedic traditions. This website serves as a digital gateway for devotees and visitors to learn about the temple, its history, deities, events, and spiritual practices.

## ✨ Features

- **Bilingual Support**: Seamlessly switch between English and Telugu
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Premium design with traditional Indian ornamental elements
- **Dynamic Content**: Information about deities, events, guru parampara, and affiliated temples
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Social Media Integration**: Direct links to YouTube, Facebook, Instagram, and WhatsApp community

## 🎯 Pages

- **Home**: Overview of the peetham with hero section and key highlights
- **About**: Detailed history and mission of Sri Siddheswari Peetham
- **Deities**: Information about all deities worshipped at the peetham
- **Parampara**: Guru lineage and spiritual heritage
- **Peethadhipathi Gallery**: Current spiritual leader profiles and contributions
- **Events**: Upcoming and past spiritual events and celebrations
- **Homam**: Details about fire rituals and their significance
- **Visit**: Practical information for visiting the peetham
- **Affiliated Temples**: Network of associated spiritual centers
- **Contact**: Contact information and inquiry form
- **Donate**: Support the peetham's charitable activities

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Custom component library with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Image Optimization**: Next.js Image component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **pnpm** or **yarn**
- **Git** ([Download](https://git-scm.com/))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd sri-siddheswari-peetham-website
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

Using yarn:
```bash
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will automatically reload when you make changes.

## 📦 Build for Production

### Create Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Export Static Site (Optional)

```bash
npm run build
npm run export
```

## 📁 Project Structure

```
sri-siddheswari-peetham-website/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── affiliated-temples/       # Affiliated temples page
│   ├── contact/                  # Contact page
│   ├── deities/                  # Deities page
│   ├── donate/                   # Donation page
│   ├── events/                   # Events page
│   ├── homam/                    # Homam page
│   ├── parampara/                # Guru lineage page
│   ├── peethadhipathi-gallery/   # Spiritual leader page
│   ├── visit/                    # Visit information page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── icons/                    # Custom icon components
│   ├── ui/                       # UI component library
│   ├── animate-on-scroll.tsx     # Animation components
│   ├── site-footer.tsx           # Footer component
│   └── site-header.tsx           # Header/navigation component
├── lib/                          # Utility functions and contexts
│   ├── language-context.tsx      # Bilingual support context
│   ├── translations.ts           # Translation strings
│   ├── scroll-animations.tsx     # Scroll animation utilities
│   └── utils.ts                  # General utilities
├── hooks/                        # Custom React hooks
├── public/                       # Static assets (images, icons)
├── styles/                       # Additional style files
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Other Platforms

This Next.js app can also be deployed to:
- **Netlify**: Use the Next.js plugin
- **AWS Amplify**: Follow AWS Amplify documentation for Next.js
- **DigitalOcean App Platform**: Direct Next.js support
- **Self-hosted**: Build and run with Node.js server

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

### Customization

- **Colors**: Edit `tailwind.config.ts` or `app/globals.css`
- **Translations**: Update `lib/translations.ts`
- **Social Links**: Update in `components/site-footer.tsx`
- **Contact Info**: Update in `components/site-footer.tsx` and `app/contact/page.tsx`

## 📱 Social Media

- **YouTube**: [@SriSiddeswaripeetham](https://www.youtube.com/@SriSiddeswaripeetham)
- **Facebook**: [Sri Siddheswari Peetham](https://www.facebook.com/share/1ADsPJTnUL/)
- **Instagram**: [@sri_siddheshwari_peetam](https://www.instagram.com/sri_siddheshwari_peetam?igsh=MXVyMjZrM2M5YTIzaQ==)
- **WhatsApp Community**: [Join Group](https://chat.whatsapp.com/CjrsFyJSZMHGIUG2ICwfLt?mode=ac_t)

## 📞 Contact

**Sri Siddheswari Peetham**  
Courtallam, Tamil Nadu, India

- **Phone**: [+91 9443184738](tel:+919443184738)
- **Email**: [info@srisiddheswari.org](mailto:info@srisiddheswari.org)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 License

This project is created for Sri Siddheswari Peetham. All rights reserved.

## 💙 Acknowledgments

- **Developed by**: [TechVedyaa](https://techvedyaa.com)
- **Framework**: Next.js Team
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

---

**Om Namah Shivaya** 🙏

Made with devotion for the spiritual community of Sri Siddheswari Peetham.
