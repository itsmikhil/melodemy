import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div className="max-w-screen min-h-screen bg-black text-white">
      <NavBar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
    </div>
  );
}
