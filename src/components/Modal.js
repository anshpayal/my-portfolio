"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-6"
      onClick={onClose}
    >
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg max-h-screen max-w-lg md:max-w-3xl w-full p-6 relative animate-fade-in overflow-scroll" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
        >
          <IoClose size={18} />
        </button>
        <h3 className="text-2xl mb-2 text-zinc-700 dark:text-white flex items-center gap-2 ">
          {project.title}
        </h3>
        <div className="flex items-center mb-3 gap-4">
          <Link
            href={project.url}
            target="_blank"
            className="flex items-center gap-2 text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition text-xs"
          >
            <FaEye/>
            Live Preview
          </Link>
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target="_blank"
              className="text-xs flex items-center gap-2 text-blue-500 border border-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              <FiGithub/>
              Show Code
            </Link>
          )}
        </div>
        <ul className="list-disc ml-6 text-zinc-700 dark:text-zinc-200 font-light">
          {project.contribution.map((item, index) => (
            <li key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: item }}>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
