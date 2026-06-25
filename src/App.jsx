import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import HowItWorks from "./components/HowItWorks";
import TrustBar from "./components/TrustBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <Footer />
    </div>
  );
}