import About from "@/components/About";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";


export default function HomePage() {
  return (
    <div>
      {/* About Me Section */}
      <About />

      {/* Project Section */}
      <Project />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Contact form */}
      <ContactForm />
    </div>
  );
}
