import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

export default function HomePage() {
  return (
    <div>
      {/* About Me Section */}
      <About />

      {/* Project Section */}
      <Project />
      
      {/* Experience Section */}
      <Experience/>
    </div>
  );
}
