//Components
import Services from "../../src/app/components/services";
import Projects from "../../src/app/components/projects";
import About from "../../src/app/components/about";
import Contact from "./components/contact";
import Footer from "./components/footer"
import LatestProjects from "./components/latestprojects";

export default function Home() {
  return (
    <main className="bg-pale-page">
      <div className="noise"></div>
      <LatestProjects/>
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
