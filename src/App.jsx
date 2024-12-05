import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import About from './components/About';

export default function App() {
  return (
    <>
      <main className='overflow-y-hidden text-neutral-200 antialiased'>
        <Navbar />
        <HeroSection />
        <Dishes />
        <About />
      </main>
    </>
  )
}