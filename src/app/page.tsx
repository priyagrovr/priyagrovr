import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import GitHubStats from "@/components/GitHubStats";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Gallery />
        <GitHubStats />
        <GoogleMap />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
