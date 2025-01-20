import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { about } from "@/data/constant";

export default function Footer() {
  const { socialLinks } = about;
  return (
    <footer className="mt-16 py-4 dark:bg-zinc-900 border-t border-gray-700">
      <div className="text-sm flex flex-col gap-2 mx-auto justify-center md:flex-row items-center md:justify-between max-w-3xl md:px-4 text-black dark:text-white">
        <div className="flex space-x-3">
          <a href={socialLinks.linkedin} target="_blank">
            <IoLogoLinkedin size={24} className="dark:bg-zinc-900" />
          </a>
          <a href={socialLinks.github} target="_blank">
            <FaSquareGithub size={24} className="dark:bg-zinc-900" />
          </a>
          <a href={socialLinks.twitter} target="_blank">
            <FaSquareXTwitter size={24} className="dark:bg-zinc-900" />
          </a>
        </div>
        <p>&copy; 2025 Ansh Payal. All rights reserved.</p>
      </div>
    </footer>
  );
}
