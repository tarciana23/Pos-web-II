import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import RecuperarSenha from "./pages/recuperarSenha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
