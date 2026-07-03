import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <SkillSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
    </>
  );
}

export default App;