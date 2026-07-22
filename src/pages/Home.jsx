import Hero from "../comps/home/Hero";
import Stats from "../comps/home/Stats";
import About from "../comps/home/About";
import Features from "../comps/home/Features";
import HowItWorks from "../comps/home/HowItWorks";
import CTA from "../comps/home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}