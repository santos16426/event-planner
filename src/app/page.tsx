'use client';
import Header from '@/components/site/Header';
import HeroBanner from '@/components/ui/hero-parallax';
import { products } from '@/constants/products';

export default function home() {
  return (
    <>
      <Header />
      <HeroBanner products={products} />;
    </>
  );
}
