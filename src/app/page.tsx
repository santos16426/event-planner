'use client';
import HeroBanner from '@/components/ui/hero-parallax';
import { products } from '@/constants/products';

export default function home() {
  return <HeroBanner products={products} />;
}
