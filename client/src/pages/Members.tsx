"use client";

import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

/* ---------------- TEAM DATA ---------------- */

const presentTeam = [
  {
    name: "Vinay Madival",
    role: "Tech Lead",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Co-Lead",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Tech Member",
    image: "/members/vinay_madival.png",
  },
];

const alumniTeam = [
  {
    name: "Vinay Madival",
    role: "Founder",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Co-Founder",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Former Coordinator",
    image: "/members/vinay_madival.png",
  },
  {
    name: "Vinay Madival",
    role: "Former Tech Lead",
    image: "/members/vinay_madival.png",
  },
];

const Members = () => {
  const [activeTab, setActiveTab] = useState<"present" | "alumni">("present");

  const team = activeTab === "present" ? presentTeam : alumniTeam;

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 pt-24 md:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Members</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
          Meet the people building and shaping the Aegis community.
        </p>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-14">
          {["present", "alumni"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {tab === "present" ? "Present Team" : "Alumni"}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 place-items-center pb-8">
          {team.map((member) => (
            <div key={member.name} className="[&_>div]:!py-0">
              <CardContainer className="inter-var">
                <CardBody className="bg-zinc-900 relative group/card w-72 h-[420px] md:w-80 md:h-[480px] lg:w-96 lg:h-[540px] rounded-xl p-6 md:p-8 border border-zinc-800">
                  <CardItem translateZ="50" className="w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-60 md:h-72 lg:h-80 w-full object-cover rounded-lg"
                    />
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 md:mt-8"
                  >
                    {member.name}
                  </CardItem>

                  <CardItem
                    translateZ="40"
                    className="text-sm md:text-base lg:text-lg text-zinc-400 mt-1 md:mt-2"
                  >
                    {member.role}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
