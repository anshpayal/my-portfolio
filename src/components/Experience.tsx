"use client";
import { useState } from "react";
import Image from "next/image";
// import CodalentIcon from "../../public/codalent-icon.png";
// import FoxmulaIcon from "../../public/foxmula-icon.png";
// import CollegeIcon from "../../public/college-icon.png";
import { ExperienceType, experience } from "@/data/constant";

export default function Experience() {
  // const experiences = [
  //   {
  //     role: "Frontend Developer",
  //     company: "Codalent",
  //     duration: "Aug 2024 - Present",
  //     description:
  //       "I have extensive experience in building robust web applications and platforms using modern frameworks like Next.js and React. I developed the KrakenD Playground, an interactive API gateway demo platform, and the CrowdSec website, integrating WordPress as a headless CMS with GraphQL. My work includes implementing advanced features like real-time chat with WebSocket, dynamic component rendering systems, and Algolia-powered search functionality. Additionally, I created an IP verification feature leveraging CrowdSec’s public API, ensuring reliability with rate-limiting mechanisms.",
  //     icon: CodalentIcon,
  //   },
  //   {
  //     role: "Frontend Developer",
  //     company: "Harman Connected Service",
  //     duration: "March 2022 - July 2023",
  //     description:
  //       "I contributed to the development of an internal video conferencing web app, focusing on building user-friendly UI components and features using React.js. I implemented intuitive video call controls, optimized room creation and management with Context API, and developed a call analytics dashboard using Recharts to provide insights into usage patterns and call durations. My work enhanced the app's functionality and user experience.",
  //   },
  //   {
  //     role: "SDE (Frontend Developer)",
  //     company: "Foxmula",
  //     duration: "May 2021 - July 2021",
  //     description:
  //       "Worked with the team to complete the assignments, learn new methodologies of software and frontend development. Later, task was provided to create a dashboard of their project called Menrva (Kind of Student portal).",
  //     icon: FoxmulaIcon,
  //   },
  //   {
  //     year: "2018-2022",
  //     role: "Bachelor's of Technology (Computer Science)",
  //     company: "UPES, Dehradun",
  //     duration: "June 2021 - Dec 2021",
  //     description: "",
  //     icon: CollegeIcon,
  //   },
  // ];

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
