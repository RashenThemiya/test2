import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactManager from './pages/ContactManager';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="p-m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<ContactManager />} />
        </Routes>
      </div>
    </Router>
  );
}
