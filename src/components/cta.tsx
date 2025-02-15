import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="container">
      <div className="bg-charcoal rounded-lg md:rounded-[20px] px-5 py-7  lg:px-10 lg:py-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-4xl lg:text-[76px] lg:leading-[150%] max-w-[564px] font-medium">
          Don&apos;t Miss the Future of Health Tech
        </h2>

        <Button
          variant="primary"
          size="xl"
          className="uppercase text-base lg:text-2xl font-normal"
        >
          Try Guardians Now
        </Button>
      </div>
    </section>
  );
}
