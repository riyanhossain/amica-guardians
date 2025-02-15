import Image from "next/image";
import React from "react";

export default function ActivityCard({
  name,
  icon,
  value,
  change,
}: {
  name: string;
  icon: string;
  value: string;
  change: string;
}) {
  return (
    <div className="bg-charcoal rounded-xl p-5 md:p-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-xl">{name}</p>

          <Image src={icon} alt={name} width={32} height={32} />
        </div>

        <div className="flex items-center gap-x-6">
          <p className="text-2xl tracking-[1.1]">{value}</p>
          <p className="text-xl text-tiffany-blue">{change}</p>
        </div>
      </div>
    </div>
  );
}
