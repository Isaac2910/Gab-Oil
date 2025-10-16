import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Domaines from "./components/Domaines";
import Offres from "./components/Offres";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Domaines />
      <Offres />
      <Footer />
    </main>
  );
}
