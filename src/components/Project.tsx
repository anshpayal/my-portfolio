"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Modal from "./Modal";

import CrowdsecImage from "../../public/crowdsec-project.png";
import KrakendImage from "../../public/krakend-project.png";
import SnipurlImage from "../../public/snipurl-project.png";
import SharkdomImage from "../../public/sharkdom-project.png";

import { FaLink } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  url: string;
  tag: string;
  contribution?: string[];
};

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Crowdsec",
      description:
        "CrowdSec provides open source solution for detecting and blocking malicious IPs, safeguarding both infrastructure and application security.",
      techStack: [
        "Next.js",
        "React",
        "Javascript",
        "Tailwind",
        "GraphQL",
        "Headless CMS",
      ],
      image: CrowdsecImage,
      url: "https://www.crowdsec.net/",
      tag: "Full-time",
      contribution: [
        "Developed the CrowdSec website using Next.js and TypeScript with WordPress as a headless CMS via GraphQL.",
        "Built a scalable dynamic component system supporting 18+ layouts, reducing clients page development time by 80%.",
        "Integrated Algolia for advanced blog search and filtering.",
        "Implemented IP verification with CrowdSec’s public API, including blocklist checks, removal requests, and rate-limiting for reliability.",
      ],
    },
    {
      title: "KrakenD",
      description:
        "KrakenD is an open-source API Gateway that helps you effortlessly adopt microservices and secure communications.",
      techStack: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind",
        "Websocket",
        "MDX component",
      ],
      image: KrakendImage,
      url: "https://www.krakend.io/enterprise/",
      tag: "Full-time",
      contribution: [
        "Built the KrakenD Playground website with Next.js, providing an interactive demo platform for exploring API gateway features and testing endpoints.",
        "Developed a WebSocket-based real-time chat system with room-based functionality and connection management for API endpoint use cases.",
        "Integrated MDX library for dynamic content updates, enabling client to easily modify API endpoint descriptions.",
      ],
    },
    {
      title: "Sharkdom",
      description:
        "Discover and connect with the right partners to boost revenue, enhance offerings, and unlock new opportunities—all on one seamless platform.",
      techStack: [
        "Next.js",
        "React",
        "Javascript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Vercel Deployment",
      ],
      image: SharkdomImage,
      url: "https://www.sharkdom.com/",
      tag: "Part-time",
      contribution: [
        "Integrated a RESTful API to enable dynamic pricing based on INR and USD.",
        "Implemented a new user login and registration flow and done Deployment of the application using Vercel and the Vercel CLI.",
        "Resolved responsiveness issues and added animations to enhance component interactions.",
      ],
    },
    {
      title: "SnipUrl",
      description:
        "SnipURL is a URL shortening tool built with ReactJS and Supabase. Easily shorten long URLs and track their analytics for better link management.",
      techStack: ["React", "Javascript", "Tailwind CSS", "Supabase", "Shadcn"],
      image: SnipurlImage,
      url: "https://snipurl.co/",
      tag: "Personal Project",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="my-16">
      <h2 className="text-4xl font-semibold mb-8 text-zinc-700 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-400 dark:border-gray-700 rounded-xl overflow-hidden group"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
              width={200}
              height={192}
            />

            <div className="px-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium mb-2 text-zinc-700 dark:text-white flex items-center gap-2">
                  {project.title}
                  <Link href={project.url} target="_blank">
                    <FaLink size={16} />
                  </Link>
                </h3>
                <p className="text-sm bg-zinc-700 mb-2 dark:text-white rounded px-2">
                  {project.tag}
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-light mb-2">
                {project.description}
              </p>
              {project.contribution && (
                <button
                  onClick={() => openModal(project)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Read about my contribution
                </button>
              )}
              <div className="flex flex-wrap gap-3 mt-4 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-zinc-500 bg-gray-200 dark:bg-zinc-700 dark:text-zinc-300 font-extralight italic rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
