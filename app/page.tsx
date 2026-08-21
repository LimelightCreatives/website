import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

    </>
  );
}