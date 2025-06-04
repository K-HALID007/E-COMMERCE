'use client';

import React from 'react';
import ElectronicsPage from "@/components/home/electronic/electronic";
import Navbar from "@/components/home/navbar/navbar";
import Footer from "@/components/home/footer/footer";
export default function ElectronicPage() {
  return (
    <>
      <Navbar/>
      <ElectronicsPage/>
      <Footer/>
    </>
  );
}