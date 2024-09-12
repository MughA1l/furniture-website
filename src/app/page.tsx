
import Navbar from "@/components/Navbar/Navbar" 
import Hero from "@/components/hero/Hero"
import Logo from "@/components/Logo/Logo"
import Wood from "@/components/wood/index"
import Footer from '@/components/footer/Footer'
import GetInTouch from "@/components/contect/index"
import KeyPoints from "@/components/keypoints/index"
import Testi from '@/components/Testinomial/index'
export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Logo/>
   <Wood/>
   <KeyPoints/>
   <Testi/>
   <GetInTouch/>
  
   <Footer/>
   </>
  );
}
