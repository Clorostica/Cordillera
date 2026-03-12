import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import ProductSlider from './components/ProductSlider'
import FeaturedDishes from './components/FeaturedDishes'
import SpecialOffers from './components/SpecialOffers'
import FAQ from './components/FAQ'
import Features from './components/Features'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ProductSlider />
      <FeaturedDishes />
      <SpecialOffers />
      <FAQ />
      <Features />
      <MapSection />
      <Footer />
    </>
  )
}
