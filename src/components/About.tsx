import Image from "next/image";
import MyProfilePhoto from "../../public/profile-photo.jpeg";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between md:items-center md:my-16">
      <div className="md:w-8/12">
        <h1 className="text-4xl font-bold pb-1">Ansh Payal</h1>
        <h2 className="font-light text-zinc-400">
          Experienced Frontend Developer skilled in building products with
          Next.js, React, Tailwind CSS, API integrations, web performance
          optimization, and more.
        </h2>
        <div className="flex space-x-3 mt-4">
          <a href="https://twitter.com" target="_blank">
            <FaSquareXTwitter size={24} />
          </a>
          <a href="https://github.com/anshpayal" target="_blank">
            <FaSquareGithub size={24} />
          </a>
          <a href="https://linkedin.com/anshpayal" target="_blank">
            <IoLogoLinkedin size={24} />
          </a>
        </div>
      </div>
      <Image
        src={MyProfilePhoto}
        alt="Ansh Payal"
        className="w-32 h-32 rounded-xl mb-6 md:mb-0"
      />
    </section>
  );
}
