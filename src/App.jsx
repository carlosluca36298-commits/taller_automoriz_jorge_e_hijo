import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testigos from './components/Testigos';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#0b0d13', minHeight: '100vh', color: '#e2e8f0', margin: 0 }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testigos />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;
