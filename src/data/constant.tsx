import { StaticImageData } from "next/image";
import CrowdsecImage from "../../public/crowdsec-project.png";
import KrakendImage from "../../public/krakend-project.png";
import SnipurlImage from "../../public/snipurl-project.png";
import SharkdomImage from "../../public/sharkdom-project.png";
import ProfilePhoto from "../../public/profile-photo.jpeg";
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
  codeUrl?: string;
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
};

export type ExperienceType = {
  role: string;
  type: string;
  company: string;
  duration: string;
  description?: string;
  icon?: StaticImageData;
};

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
      "<b>Website Development: </b><br/>Created the CrowdSec website using Next.js and TypeScript, integrating WordPress as a headless CMS through GraphQL APIs for seamless content management.",
      "<b>Automated Unused Image Detection: </b><br/>Developed a utility script to identify dead/unused images in the src/ directory. Integrated it into a GitHub workflow to enforce cleanup by checking for unused images during pull requests.",
      "<b>Dynamic Component Rendering System: </b><br/>Build a scalable React-based system supporting 18+ layout variations. This reduced client development time for new pages by 80%.",
      "<b>Enhanced Blog Search: </b><br/>Implemented search and filtering functionality using Algolia Search, significantly improving the user search experience.",
      "<b>IP Verification Feature: </b><br/>Integrated CrowdSec’s public API to allow users to verify and request removal from community blocklists. Added rate-limiting fallbacks to ensure reliability during API disruptions.",
    ],
  },
  {
    title: "Sharkdom",
    description:
      "Discover and connect with the right partners to boost revenue, enhance offerings, and unlock new opportunities—all on one seamless platform.",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Javascript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    image: SharkdomImage,
    url: "https://www.sharkdom.com/",
    tag: "Part-time",
    contribution: [
      "<b>Redesigning the Authentication Flow: </b><br/> Developed a new login and registration flow with robust form validations to improve user experience and security.",
      "<b>Dynamic Pricing Implementation: </b><br/>Built a dynamic pricing system integrated with RESTful APIs, enabling users to view region-specific pricing (e.g., INR and USD) based on their location.",
      "<b>Proposal/Enquiry Functionality: </b><br/>Optimized performance by using cached data to reduce unnecessary API calls and integrated APIs to support various options for proposal creation, including templates, AI-generated proposals, and custom proposals.",
      "<b>Component Redesigns: </b></br>Revamped key components such as the Explore page, which lists potential partners for collaboration.",
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
      "<b>Developed the KrakenD Playground Website: </b></br>Built an API gateway demo platform from scratch using Next.js, enabling users to explore enterprise features and test API endpoints interactively.",
      "<b>Real-Time Communication System: </b></br>Designed and implemented a real-time chat system with React and the WebSocket protocol, featuring room-based chat functionality and robust connection state management for a specific API endpoint.",
      "<b>Dynamic Content Update: </b></br>Integrated MDX library for dynamic content updates, enabling client to easily modify API endpoint descriptions.",
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
    codeUrl: "https://github.com/anshpayal/SnipURL",
    contribution: [
      "<b>Full-Stack Development: </b></br>Designed and developed SnipURL, a complete URL shortening web application using React.js, Supabase, Tailwind CSS, and Shadcn UI.",
      "<b>Authentication and Security: </b></br>Implemented robust user authentication, including login and signup functionality with form validation via Supabase and secured user sessions using Context API and protected routes for enhanced security.",
      "<b>User Dashboard: </b></br>Built a dynamic dashboard for managing shortened URLs, including features for filtering, deleting, and generating QR codes for convenient sharing.",
      "<b>Analytics and Insights: </b></br>Added an analytics page to provide users with actionable insights, including: Total Clicks, Location metrics and Device analytics",
    ],
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
  "Next.js",
  "React",
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
