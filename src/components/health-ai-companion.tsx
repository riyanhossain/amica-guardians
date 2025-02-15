import React from "react";
import Image from "next/image";

export default function HealthAICompanion() {
  const cards = [
    {
      title: "Choose Your Guardian's Personality",
      description:
        "Get insights your way - whether you prefer motivation, analytics, or casual chats",
      image: "/images/health-1.png",
    },
    {
      title: "Watch Your Data Come Alive",
      description:
        "Beautiful visualizations that actually make sense and feel personal",
      image: "/images/health-2.png",
    },
    {
      title: "Enjoy Your Health Journey",
      description:
        "Finally, a platform that makes fitness tracking engaging and meaningful",
      image: "/images/health-3.png",
    },
  ] as const;
  return (
    <section className="container space-y-8 md:space-y-12">
      <h2 className="text-5xl xl:text-[74px] xl:leading-[1.5] max-w-[1100px]">
        AI Companions That Make Health Data Fun
      </h2>

      <div className="space-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_540px] gap-y-8 lg:gap-x-12"
          >
            <div className="space-y-4 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-x-5 lg:gap-x-6 uppercase text-2xl xl:text-[40px] xl:leading-[1.5] font-medium">
                <span className="size-7 min-w-7 md:size-10 md:min-w-10 rounded-full bg-tiffany-blue text-base md:text-2xl flex items-center justify-center">
                  {index + 1}
                </span>
                <p>{card.title}</p>
              </div>

              <p className="uppercase text-2xl xl:text-4xl font-medium opacity-50">
                {card.description}
              </p>
            </div>

            <div>
              <Image
                src={card.image}
                alt="Health"
                width={500}
                height={500}
                className="object-cover rounded-lg overflow-hidden w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
