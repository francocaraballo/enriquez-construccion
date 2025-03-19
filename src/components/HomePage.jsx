import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default HomePage;