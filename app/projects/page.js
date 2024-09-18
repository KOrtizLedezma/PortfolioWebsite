import ProjectsSection from "../../components/ProjectSection"
import NavBar from "../../components/NavBar"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
    </main>
  )
}