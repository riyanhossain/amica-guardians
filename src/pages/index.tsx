import BeyondTheHype from "@/components/beyond-the-hype";
import CTA from "@/components/cta";
import HealthAICompanion from "@/components/health-ai-companion";
import Hero from "@/components/hero";
import JoinTheMovement from "@/components/join-the-movement";
import WhyGuardians from "@/components/why-guardians";
import BaseLayout from "@/components/base-layout";
import { Fragment } from "react";

export default function Home() {
  return (
    <BaseLayout>
      <div className="bg-black">
        <div className="h-[40px] lg:h-[80px]" />
        <Hero />
        <div className="h-[80px] lg:h-[140px]" />
        <WhyGuardians />
        <div className="h-[80px] lg:h-[140px]" />
        <HealthAICompanion />
        <div className="h-[80px] lg:h-[140px]" />
        <BeyondTheHype />
        <div className="h-[80px] lg:h-[140px]" />
        <JoinTheMovement />
        <div className="h-[80px] lg:h-[140px]" />
        <CTA />
        <div className="h-[50px] lg:h-[86px]" />
      </div>
    </BaseLayout>
  );
}
