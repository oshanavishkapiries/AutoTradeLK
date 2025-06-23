import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from '@tanstack/react-router';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;