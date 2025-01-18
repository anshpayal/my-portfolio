import CrowdsecImage from "../../public/crowdsec-project.png";
import KrakendImage from "../../public/krakend-project.png";
import SnipurlImage from "../../public/snipurl-project.png";
import SharkdomImage from "../../public/sharkdom-project.png";
import ProfilePhoto from "../../public/profile-photo.jpeg"
import { StaticImageData } from "next/image";

export type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  url: string;
  tag: string;
  contribution?: string[];
};

export type AboutType = {
  profilePhoto: StaticImageData;
  heading: string;
  description: string;
  socialLinks: {                
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export const projects: ProjectType[] = [
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

export const about: AboutType = {
  profilePhoto: ProfilePhoto,
  heading: "Ansh Payal",
  description:
    "Frontend Developer with 2+ years of experience specializing in " +
    "<b class='text-zinc-800 dark:text-zinc-300'>Next.js, React, Tailwind CSS, API integrations, Web performance optimization</b>, and more. Delivering high-quality, efficient web applications.",
  socialLinks: {
    linkedin: "https://linkedin.com/anshpayal",
    github: "https://github.com/anshpayal",
    twitter: "https://twitter.com/anshpayal18",
  },
};
