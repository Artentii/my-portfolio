import Image from 'next/image'

//Components
import Services from '../../src/app/components/services'
import Projects from '../../src/app/components/projects'

export default function Home() {
  return (
    <main className="bg-page">
      <Services/>
      <Projects/>
    </main>
  )
}
