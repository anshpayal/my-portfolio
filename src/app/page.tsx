import About from "@/components/About";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function HomePage() {
  return (
    <div>
      {/* About Me Section */}
      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      {/* Project Section */}
      <ScrollAnimation>
        <Project />
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>

      {/* Experience Section */}
      <ScrollAnimation>
        <Experience />
      </ScrollAnimation>

      {/* Contact form */}
      <ScrollAnimation>
        <ContactForm />
      </ScrollAnimation>
    </div>
  );
}
