//Components
import Services from "./sections/services/page";
import Projects from "./sections/work/page";
import About from "./sections/about/page";
import LatestProjects from "./components/latestprojects";
import Hero from ".";
import FAQs from "./sections/faqs/page";
import Testimonials from "./sections/testimonials/page";


export default function Home() {
  return (
    <main>
      <Hero />
      <LatestProjects />
      <Services />
      <Testimonials />
      <Projects />
      <FAQs />
      <About />
    </main>
  );
}
