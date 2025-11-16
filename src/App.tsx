import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NSFWProvider } from './contexts/NSFWContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateCharacter from './pages/CreateCharacter';
import ImageGenerator from './pages/ImageGenerator';
import Roleplay from './pages/Roleplay';
import Chat from './pages/Chat';
import Pricing from './pages/Pricing';

function App() {
  return (
    <NSFWProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<CreateCharacter />} />
            <Route path="generate" element={<ImageGenerator />} />
            <Route path="roleplay" element={<Roleplay />} />
            <Route path="chat" element={<Chat />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </NSFWProvider>
  );
}

export default App;
