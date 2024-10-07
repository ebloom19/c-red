import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Suppliers from '@/components/Suppliers'
import MediaHighlights from '@/components/MediaHighlights'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <MediaHighlights />
      <Suppliers />
      <Contact />
      <Footer />
    </main>
  )
}