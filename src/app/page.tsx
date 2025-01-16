import Project from "@/components/Project";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    description: "A short description of Project 1.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    image: "", // Replace with your project image
  },
  {
    title: "Project 2",
    description: "A short description of Project 2.",
    techStack: ["JavaScript", "CSS"],
    image: "", // Replace with your project image
  },
  {
    title: "Project 3",
    description: "A short description of Project 3.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    image: "", // Replace with your project image
  },
  {
    title: "Project 4",
    description: "A short description of Project 4.",
    techStack: ["JavaScript", "CSS"],
    image: "", // Replace with your project image
  },
];

export default function HomePage() {
  return (
    <div>
      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <Project />

      {/* Experience Section */}
      <Experience />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
