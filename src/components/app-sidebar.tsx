"use client";

import * as React from "react";
import { BotMessageSquare, PieChart } from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
// import Image from "next/image";
import { useUser } from "@clerk/nextjs";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  Apps: [
    {
      title: "Chat",
      url: "/dashboard/chat",
      icon: BotMessageSquare,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  return (
    <Sidebar collapsible="icon" {...props} className="border-white/20">
      <SidebarHeader className="bg-black text-white">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="bg-black text-white">
        <NavMain items={data.Apps} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>

      <SidebarFooter className="bg-black text-white">
        <NavUser
          user={{
            name: user?.fullName || "No User Found",
            email: user?.emailAddresses[0].emailAddress || "no email found",
            avatar: user?.imageUrl || "No avatar found",
          }}
        />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
