"use client";

import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-6"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg max-w-lg w-full p-6 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
        >
          <IoClose size={18} />
        </button>
        <h3 className="text-2xl mb-4 text-zinc-700 dark:text-white flex items-center gap-2 ">
          {project.title}
          <Link href={project.url} target="_blank">
            <FaLink size={16} />
          </Link>
        </h3>
        <ul className="list-disc ml-6 text-zinc-700 dark:text-zinc-200 font-light">
          {project.contribution.map((item, index) => (
            <li key={index} className="mb-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
