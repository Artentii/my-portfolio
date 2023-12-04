//Components
import Services from '../../src/app/components/services'
import Projects from '../../src/app/components/projects'
import About from '../../src/app/components/about'

export default function Home() {
  return (
    <main className="bg-pale-page">
      <Services/>
      <Projects/>
      <About/>
    </main>
  )
}
