"use client";
import { useState } from "react";
import Image from "next/image";
import { ExperienceType, experience } from "@/data/constant";

export default function Experience() {

  return (
    <section id="experience" className="my-16">
      <h2 className="text-4xl font-semibold mb-8 text-zinc-700 dark:text-white">
        Experience
      </h2>
      <div className="relative border-l-2 border-zinc-700 ml-4">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience:ExperienceType }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="mb-10 ml-6 flex flex-col items-start">
      <div className="absolute -left-4 w-8 h-8 rounded-full bg-white overflow-hidden border-2 border-gray-900 flex items-center justify-center text-sm font-bold text-gray-600">
        {experience.icon ? (
          <Image
            src={experience.icon}
            alt="icon"
            className="w-5 h-5 rounded-full"
            width={32}
            height={32}
          />
        ) : (
          experience.company.charAt(0)
        )}
      </div>
      <div className="flex items-center space-x-3">
        <h3 className="text-xl text-zinc-700 dark:text-white">
          {experience.role}
        </h3>
      </div>
      <p className="text-gray-400 mb-1">{experience.company} • { experience.type}</p>
      <p className="text-sm text-gray-500">{experience.duration}</p>
      {experience.description && (
        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-thin">
          {showFullDescription ? (
            <>
              {experience.description}{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleDescription}
              >
                Show less
              </button>
            </>
          ) : (
            <>
              {experience.description.slice(0, 150)}...{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleDescription}
              >
                Read more
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
