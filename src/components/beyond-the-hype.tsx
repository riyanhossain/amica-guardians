import Image from "next/image";
import React from "react";

export default function BeyondTheHype() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
        <div className="space-y-8 md:space-y-16 md:order-1">
          <h2 className="text-5xl xl:text-[74px] xl:leading-[1.5]">
            Beyond the Hype
          </h2>

          <ul className="list-none marker:text-tiffany-blue marker:size-3 space-y-4 list-inside uppercase text-lg xl:text-[28px] xl:leading-[1.5] font-medium marker:text-4xl lg:max-w-[524px]">
            <li className="flex items-center gap-3 md:gap-x-5 lg:gap-x-6">
              <span className="size-2 min-w-2 md:size-5 lg:size-6 rounded-full bg-tiffany-blue"></span>
              <p>Direct partnerships with health tech leaders</p>
            </li>

            <li className="flex items-center gap-3 md:gap-x-5 lg:gap-x-6">
              <span className="size-2 min-w-2 md:size-5 lg:size-6 rounded-full bg-tiffany-blue"></span>
              <p>Working platform you can try today</p>
            </li>

            <li className="flex items-center gap-3 md:gap-x-5 lg:gap-x-6">
              <span className="size-2 min-w-2 md:size-5 lg:size-6 rounded-full bg-tiffany-blue"></span>
              <p>Clear roadmap for multi-watch integration</p>
            </li>

            <li className="flex items-center gap-3 md:gap-x-5 lg:gap-x-6">
              <span className="size-2 min-w-2 md:size-5 lg:size-6 rounded-full bg-tiffany-blue"></span>
              <p>Developer ecosystem growing daily</p>
            </li>
          </ul>
        </div>

        <div className="md:order-2 2xl:max-h-[640px]">
          <Image
            src="/images/beyond-the-hype.png"
            alt="Join the movement"
            width={500}
            height={500}
            className="object-cover rounded-lg overflow-hidden w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
