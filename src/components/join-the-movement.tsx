import Image from "next/image";
import React from "react";

export default function JoinTheMovement() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
        <div className="space-y-8">
          <h2 className="text-5xl xl:text-[74px] xl:leading-[1.5]">
            Be Part of Something Big
          </h2>

          <p className="uppercase text-lg xl:text-[26px] xl:leading-[1.5] font-medium opacity-50 text-justify">
            Major health tech companies are turning to AI as the future, and
            Guardians is at the center of this evolution. We&apos;re building
            partnerships with industry leaders to transform how people
            experience their health data. Early supporters are joining more than
            a project - they&apos;re becoming part of a movement that&apos;s
            redefining personal wellness through AI. This is the future of
            health technology, and it&apos;s happening now.
          </p>
        </div>

        <div className="2xl:max-h-[654px]">
          <Image
            src="/images/join-the-movement.png"
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
