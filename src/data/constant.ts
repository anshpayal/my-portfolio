import { StaticImageData } from "next/image";
import CrowdsecImage from "../../public/crowdsec-project.png";
import KrakendImage from "../../public/krakend-project.png";
import SnipurlImage from "../../public/snipurl-project.png";
import SharkdomImage from "../../public/sharkdom-project.png";
import ProfilePhoto from "../../public/profile-photo.jpeg"
import CodalentIcon from "../../public/codalent-icon.png";
import FoxmulaIcon from "../../public/foxmula-icon.png";
import CollegeIcon from "../../public/college-icon.png";

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

export type ExperienceType = {
  role: string;
  type: string;
  company: string;
  duration: string;
  description?: string;
  icon?: StaticImageData;
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

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    type: "Full-time",
    company: "Codalent",
    duration: "Aug 2024 - Present",
    description:
      "I have extensive experience in building robust web applications and platforms using modern frameworks like Next.js and React. I developed the KrakenD Playground, an interactive API gateway demo platform, and the CrowdSec website, integrating WordPress as a headless CMS with GraphQL. My work includes implementing advanced features like real-time chat with WebSocket, dynamic component rendering systems, and Algolia-powered search functionality. Additionally, I created an IP verification feature leveraging CrowdSec’s public API, ensuring reliability with rate-limiting mechanisms.",
    icon: CodalentIcon,
  },
  {
    role: "Frontend Developer",
    type: "Full-time",
    company: "Harman Connected Service",
    duration: "March 2022 - July 2023",
    description:
      "I contributed to the development of an internal video conferencing web app, focusing on building user-friendly UI components and features using React.js. I implemented intuitive video call controls, optimized room creation and management with Context API, and developed a call analytics dashboard using Recharts to provide insights into usage patterns and call durations. My work enhanced the app's functionality and user experience.",
  },
  {
    role: "SDE (Frontend Developer)",
    type: "Internship",
    company: "Foxmula",
    duration: "May 2021 - July 2021",
    description:
      "Worked with the team to complete the assignments, learn new methodologies of software and frontend development. Later, task was provided to create a dashboard of their project called Menrva (Kind of Student portal).",
    icon: FoxmulaIcon,
  },
  {
    role: "Bachelor's of Technology (Computer Science)",
    type: "Full-time",
    company: "UPES, Dehradun",
    duration: "June 2018 - May 2022",
    description: "",
    icon: CollegeIcon,
  },
];

export const skills = [
  "React/Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "RESTFul API",
  "GraphQL",
  "Supabase",
  "Firebase",
  "Git/Github",
  "Performance Optimization",
];
