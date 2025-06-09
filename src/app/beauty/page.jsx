'use client';

import Navbar from "@/components/home/navbar/navbar";
import Beauty from "@/components/home/beauty/beauty";
import Footer from "@/components/home/footer/footer";   
import Categories from "@/components/home/categories/categories";   
export default function BeautyPage() {
  return (
    <>
<Navbar/>
<Categories/>
<Beauty/>
<Footer/>
    </>
  );
}