import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Events from './pages/Events.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
