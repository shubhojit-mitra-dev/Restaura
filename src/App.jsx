import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import About from './components/About';
import Mission from './components/Mission';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main className='overflow-y-hidden text-neutral-200 antialiased'>
        <Navbar />
        <HeroSection />
        <Dishes />
        <About />
        <Mission />
        <Review />
        <Contact />
        <Footer />
      </main>
    </>
  )
}