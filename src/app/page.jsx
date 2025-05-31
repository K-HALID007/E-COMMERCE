  import Navbar from "@/components/home/navbar/navbar";
import Hero from "@/components/home/hero/hero";
import Categories from "@/components/home/categories/categories";
import Image from "next/image";
import ShoppingSectionOnly499 from "@/components/home/offer499/offer499";

export default function Home() {
  return (
   <>
   <Navbar/> 
   <Categories/>
   <Hero/>
   <ShoppingSectionOnly499/>
   </>
  );
}
