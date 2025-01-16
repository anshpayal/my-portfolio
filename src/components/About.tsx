import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center my-16">
      <div>
        <h1 className="text-4xl font-bold">Ansh Payal</h1>
        <h2 className="text-lg text-zinc-400">
          Experienced Frontend Developer
        </h2>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
      {/* <Image
          src={null} // Replace with your photo
          alt="Ansh Payal"
          className="w-32 h-32 rounded-full border-2 border-gray-500 mt-8 md:mt-0"
        /> */}
    </section>
  );
}
