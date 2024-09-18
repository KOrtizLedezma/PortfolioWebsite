import HeroSection from "../../components/HeroSection"
import EmailSection from "../../components/EmailSection"
import FunFactsSection from "../../components/FunFactsSection"
import NavBar from "../../components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <FunFactsSection />
        <EmailSection />
      </div>
    </main>
  )
}