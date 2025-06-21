import Image from "next/image";
import HeroSection from "./components/HeroSection";

import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCollections from "./components/FeaturedCollections";

export default function Home() {
  return (
   <div>
          

             <HeroSection/>
             <FeaturedCollections/>
             <WhyChooseUs/>
           
   </div>
  );
}
