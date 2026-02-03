import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import PhotoGallery from "@/components/PhotoGallery";
import DocumentsSection from "@/components/DocumentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-korean">
      <Navigation />
      <HeroSection />
      <LocationSection />
      <PhotoGallery />
      <DocumentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
