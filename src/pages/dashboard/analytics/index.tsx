import React from "react";
import ActivityCard from "@/components/activity-card";
import LineCartComp from "@/components/line-chart";
import DashboardLayout from "@/components/dashboard-layout";

export default function Analytics() {
  const topCards = [
    {
      name: "Heart Rate",
      icon: "/icons/heart.svg",
      value: "72 bpm",
      change: "-2%",
    },
    {
      name: "Sleep",
      icon: "/icons/moon.svg",
      value: "7h 30m",
      change: "Good",
    },
    {
      name: "Steps",
      icon: "/icons/steps.svg",
      value: "8,234",
      change: "+66%",
    },
    {
      name: "Activity",
      icon: "/icons/activity.svg",
      value: "524 Cal",
      change: "+12%",
    },
  ] as const;

  const bottomCards = [
    {
      name: "Heart Rate",
      icon: "/icons/cloud.svg",
      value: "85%",
      change: "optimal",
    },
    {
      name: "Stress Level",
      icon: "/icons/heart.svg",
      value: "Low",
      change: "-5%",
    },
    {
      name: "Active Hours",
      icon: "/icons/clock.svg",
      value: "5h 45m",
      change: "+30m",
    },
  ];

  const lineChartData = [
    {
      title: "Heart Rate Trends",
      description: "Today",
    },
    {
      title: "Daily Activity",
      description: "Todat",
    },
  ];
  return (
    <DashboardLayout>
      <section className="flex-1 space-y-8 bg-black p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl">Health Metrics</h2>

          <div className="bg-charcoal rounded px-5 py-3 text-sm md:text-base">
            Last 24 Hours
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topCards.map((card, index) => (
            <ActivityCard {...card} key={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {lineChartData.map((data, index) => (
            <LineCartComp {...data} key={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bottomCards.map((card, index) => (
            <ActivityCard {...card} key={index} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
