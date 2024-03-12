import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Papers from './pages/Papers';
import MessageCreate from './pages/MessageCreate.jsx';
import PaperCreate from './pages/PaperCreate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Papers />} />
        <Route path="/post/:id/edit" element={<Papers />} />
        <Route path="/post/:id/message" element={<MessageCreate />} />
        <Route path="/PaperCreate" element={<PaperCreate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
