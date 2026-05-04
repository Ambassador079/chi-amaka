import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Urgency from "./components/Urgency";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AddonsSection from "./components/AddonSection";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AddonsSection />

      <Urgency />
      <SocialProof />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
