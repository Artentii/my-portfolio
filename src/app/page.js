//Components
import Services from "./components/Sections/services/page";
import Projects from "./components/Sections/projects/page";
import About from "./components/Sections/about/page";
import Contact from "./components/Sections/contact/page";
import Footer from "./components/base/footer";
import LatestProjects from "./components/latestprojects";
import Hero from ".";
import NavBar from "./components/base/navbar";
import FAQs from "./components/Sections/faqs/page";

export default function Home() {
  return (
    <main className="bg-light">
      <div className="noise"></div>
      <NavBar />
      <Hero />
      <LatestProjects />
      <Services />
      <Projects />
      <FAQs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
