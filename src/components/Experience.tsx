export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Company A",
      duration: "Jan 2022 - Present",
      description:
        "Developed modern web applications using React, Next.js, and Tailwind CSS.",
    },
    {
      role: "Web Developer Intern",
      company: "Company B",
      duration: "June 2021 - Dec 2021",
      description: "Assisted in creating responsive and SEO-friendly websites.",
    },
  ];

  return (
    <section id="experience" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-zinc-800 rounded-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
