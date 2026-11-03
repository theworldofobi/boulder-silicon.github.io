import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Teams } from "@/components/sections/Teams";
import { Project } from "@/components/sections/Project";
import { Network } from "@/components/sections/Network";
import { Sponsors } from "@/components/sections/Sponsors";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Mission />
        <Teams />
        <Project />
        <Network />
        <Sponsors />
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}
