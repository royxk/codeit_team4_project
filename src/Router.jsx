import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Papers from "./pages/Papers";
import PaperEdit from "./pages/PaperEdit";
import PaperCreate from "./pages/PaperCreate";
import ButtonTest from "./components/core/Button/ButtonTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Papers />} />
        <Route path="/post/:id/edit" element={<PaperEdit />} />
        <Route path="/post/:id/message" element={<PaperCreate />} />
        <Route path="/papercreate" element={<PaperCreate />} />
        <Route path="/buttontest" element={<ButtonTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
