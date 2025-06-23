import Image from "next/image";
import HeroSection from "../components/HeroSection";
import FeaturedCollections from "../components/FeaturedCollections";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import GallerySection from "../components/GallerySection";


export default function Home() {
  return (
   <div>
          

             <HeroSection/>
             <FeaturedCollections/>
             <AboutSection/>
             <WhyChooseUs/>
             <GallerySection/>
           
   </div>
  );
}
