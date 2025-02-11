import './App.css';
import Header from './components/Header';  // Importando o Header
//import HeroSection from './components/HeroSection';  // Importando o HeroSection
//import AboutSection from './components/AboutSection';  // Importando o AboutSection
//import ServicesSection from './components/ServicesSection';  // Importando o ServicesSection
//import InfoSection from './components/InfoSection';  // Importando o InfoSection
import ExperienceSection from './components/ExperienceSection';  // Importando a nova ExperienceSection
//import Pricing from './components/Pricing';
//import TeamSection from './components/TeamSection';
//import CaseStudies from './components/CaseStudies';
//import Testimonials from './components/Testimonials';
//import YouReadySection from './components/YouReadySection';
//import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <div className="App">
      <Header />

      {/*  
      Seção Hero 
      <HeroSection />

      Seção About 
      <AboutSection />

      Seção de Serviços 
      <ServicesSection />

      Seção de Info 
      <InfoSection />*/}

      <ExperienceSection />

      {/* 
      <Pricing/>

      <TeamSection/>

      <CaseStudies/>

      <Testimonials/>

      <YouReadySection/>

      <FAQ/>*/}

      <ContactSection/>


      {/* <div className="content">
        <p>Bem-vindo ao nosso site! Estamos felizes em tê-lo aqui.</p>
      </div>

      Outras seções podem ser adicionadas aqui */}
    </div>
  );
}

export default App;
