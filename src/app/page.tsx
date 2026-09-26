import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <HowItWorks />
        <Reviews />
        <Pricing />
        <FAQ />
        <Blog />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingAction />
      <ScrollReveal />
    </>
  );
}
