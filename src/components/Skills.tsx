// src/components/Skills.tsx
import React from "react";
import { skills } from "@/data/constant";

export default function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-4xl font-semibold mb-4 text-zinc-700 dark:text-white">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-black dark:bg-zinc-700 dark:text-white  px-4 py-1 rounded text-sm font-light"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
