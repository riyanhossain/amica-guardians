"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Button } from "./ui/button";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="container space-y-6 md:space-y-10">
      <h1 className="mx-auto max-w-[880px] text-center text-3xl uppercase md:text-5xl">
        Bringing your health data to life through{" "}
        <span className="text-tiffany-blue">AI companions</span>
      </h1>

      <p className="text-center text-2xl uppercase md:text-4xl">
        Where data meets personality
      </p>

      <div className="relative mx-auto aspect-[16/9] max-w-[980px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SCJnwT-h7Aw&ab_channel=UCDavisHealth"
          width="100%"
          height="100%"
          controls
          className="h-full w-full overflow-hidden rounded-lg md:h-[500px]"
        />
      </div>

      <p className="text-center text-2xl uppercase md:text-4xl">
        Transform your Garmin health data into meaningful conversations with AI
        companions that understand you
      </p>

      <div className="flex justify-center pt-6">
        <Button
          variant="primary"
          size="xl"
          className="text-base uppercase md:text-xl">
          Try Guardians Now
        </Button>
      </div>
    </section>
  );
}
