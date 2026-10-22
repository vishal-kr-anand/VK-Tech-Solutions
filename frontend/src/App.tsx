import { Router } from 'wouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AppRouter from './router/AppRouter';
import ScrollToTop from './router/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </Router>
  );
}

export default App;
