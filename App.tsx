import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <About />
        <Services />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
