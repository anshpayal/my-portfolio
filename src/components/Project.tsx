import Image from "next/image";

export default function Project() {
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
  return (
    <section id="projects" className="my-16">
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-700 rounded-xl bg-zinc-800"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-zinc-700 text-zinc-300 rounded-xl px-2 py-1 mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
