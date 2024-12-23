import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonial from "./components/TestimonialCards";
import UpcommingWebinars from "./components/UpcommingWebinars";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

export default function Home() {
  return(
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcommingWebinars/>
      <Instructor/>
      <Footer/>
  </main>
  )
}
