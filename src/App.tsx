import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import PersonalShopping from "./components/PersonalShopping";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <PersonalShopping />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
