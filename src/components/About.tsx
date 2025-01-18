import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { about } from "@/data/constant";

export default function About() {
  const { profilePhoto, heading, description, socialLinks } = about;
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between md:items-center md:my-16">
      <div className="md:w-8/12">
        <h1 className="text-4xl font-bold pb-1 text-zinc-700 dark:text-white">
          {heading}
        </h1>
        <h2
          className="font-light text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex space-x-3 mt-4">
          <a href={socialLinks.linkedin} target="_blank">
            <IoLogoLinkedin size={24} className="bg-zinc-900" />
          </a>
          <a href={socialLinks.github} target="_blank">
            <FaSquareGithub size={24} className="bg-zinc-900" />
          </a>
          <a href={socialLinks.twitter} target="_blank">
            <FaSquareXTwitter size={24} className="bg-zinc-900" />
          </a>
        </div>
      </div>
      <Image
        src={profilePhoto}
        alt="Ansh Payal"
        className="w-32 h-32 rounded-xl mb-6 md:mb-0"
      />
    </section>
  );
}
