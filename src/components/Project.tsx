import Image from "next/image";
import CrowdsecImage from "../../public/crowdsec-project.png";
import KrakendImage from "../../public/krakend-project.png";
import TraefikLabsImage from "../../public/traefiklabs-project.png";
import SnipurlImage from "../../public/snipurl-project.png";
import Link from "next/link";

export default function Project() {
  const projects = [
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
    },
    {
      title: "KrakenD - API Gateway",
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
    },
    {
      title: "Traefik Labs",
      description:
        "Run APIs Easily. Anywhere.Cloud-native, GitOps-driven API runtime solutions for demanding DevOps and Platform Engineers with diverse use-cases, environments, and deployment models.",
      techStack: ["Next.js", "React", "Javascript", "Tailwind CSS", "Gatsby"],
      image: TraefikLabsImage,
      url: "https://traefik.io/",
    },
    {
      title: "SnipUrl",
      description: "A fullstack URL shortning web app.",
      techStack: ["React", "Javascript", "Tailwind CSS", "Supabase", "Shadcn"],
      image: SnipurlImage,
      url: "https://www.snipurl.co",
    },
  ];
  return (
    <section id="projects" className="my-16">
      <h2 className="text-4xl font-semibold mb-8 text-zinc-700 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.url} target="_blank">
            <div className="border border-gray-400 dark:border-gray-700 rounded-xl dark:bg-zinc-800">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
                width={200}
                height={192}
              />
              <div className="px-4">
                <h3 className="text-xl font-medium mb-2 text-zinc-700 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-2 mb-4">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
