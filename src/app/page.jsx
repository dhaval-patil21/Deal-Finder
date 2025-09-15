import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../pages/Home/HeroSection"
import Category from "../pages/Home/Category";
import TrendingDeals from "../pages/Home/TrendingDeals"
import WhyCompare from "../pages/Home/WhyCompare"
// import LiveComparisonPreview from "@/pages/Home/LiveComparisonPreview";

export default function Home() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <Category/>
  <TrendingDeals/>
  <WhyCompare/>
  {/* <LiveComparisonPreview/> */}
  <Footer/>
    </>
  );
}
