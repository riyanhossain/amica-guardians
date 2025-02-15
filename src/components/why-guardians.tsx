import Image from "next/image";
import React from "react";

export default function WhyGuardians() {
  return (
    <section className="container space-y-10 uppercase">
      <h2 className="text-[#DCDCDC] text-5xl lg:text-[80px] lg:leading-[1.5]">
        Why Guardians?
      </h2>
      <Image
        src="/images/guardians.png"
        alt="Why Guardians?"
        width={500}
        height={500}
        quality={75}
        className="w-full h-full rounded-2xl overflow-hidden"
      />

      <p className="text-2xl lg:text-3xl text-tiffany-blue ">
        A New Way to Experience Your Health Data
      </p>

      <p className="text-xl lg:text-2xl font-light">
        Your health metrics shouldn&apos;t just be numbers on a screen.
        <br />
        <br />
        Guardians creates personal AI companions that transform complex data
        into engaging visual experiences through natural conversation.
        <br />
        <br />
        With major health tech partnerships and adaptive AI technology,
        we&apos;re making your fitness journey more personal and enjoyable than
        ever before.
      </p>
    </section>
  );
}
