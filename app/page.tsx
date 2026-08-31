import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollCards } from "@/components/ScrollCards";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ScrollCards />
      </main>
    </>
  );
}