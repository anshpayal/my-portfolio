"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import { ProjectType, projects } from "@/data/constant";
import { FaLink } from "react-icons/fa6";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const openModal = (project: ProjectType) => {
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
