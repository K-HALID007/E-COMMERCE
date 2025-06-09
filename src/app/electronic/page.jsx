'use client';

import React from 'react';
import ElectronicsPage from "@/components/electronic/electronic";
import Navbar from "@/components/home/navbar/navbar";
import Footer from "@/components/home/footer/footer";
import Categories from '@/components/home/categories/categories';
export default function ElectronicPage() {
  return (
    <>
      <Navbar/>
      <Categories/>
      <ElectronicsPage/>
      <Footer/>
    </>
  );
}