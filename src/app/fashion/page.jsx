import FashionPage from "@/components/fashion/fashion";
import Footer from "@/components/home/footer/footer";
import Navbar from "@/components/home/navbar/navbar";
import Categories from "@/components/home/categories/categories";
  
export default function FashionProducts() {
  return (
   <>
   <Navbar/>
   <Categories/>
   <FashionPage/>
   <Footer/>
    
   </>
  );
}