import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceBar from "@/components/ServiceBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PhoneBand from "@/components/PhoneBand";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <ServiceBar />
      <Services />
      <WhyChooseUs />
      <PhoneBand />
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Index;
