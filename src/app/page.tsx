import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <div className="max-w-screen min-h-screen bg-black text-white">
      <NavBar/>
      <HeroSection/>
    </div>
  );
}
