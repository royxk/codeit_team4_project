import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Papers from "./pages/Papers";
import PaperEdit from "./pages/PaperEdit";
import PaperCreate from "./pages/PaperCreate";

import CardPurple from "./components/core/CardList/CardBlue";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Papers />} />
        <Route path="/post/:id/edit" element={<PaperEdit />} />
        <Route path="/post/:id/message" element={<PaperCreate />} />
        <Route path="/PaperCreate" element={<PaperCreate />} />
        <Route path="/test" element={<CardPurple />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
