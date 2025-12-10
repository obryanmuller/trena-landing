import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer"; // Pode usar o Footer que você já tem

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Footer />
    </main>
  );
}