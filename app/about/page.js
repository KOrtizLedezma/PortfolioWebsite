import AboutMeSection from "../../components/AboutMeSection"
import GitHubActivity from "../../components/GitHubActivity"
import SkillShowcase from "../../components/SkillShowcase"
import NavBar from "../../components/NavBar"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutMeSection />
        <SkillShowcase />
        <GitHubActivity />
      </div>
    </main>
  )
}