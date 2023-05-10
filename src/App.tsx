import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/autenticacoes/Login";
import { Register } from "./pages/autenticacoes/Register";
import { Home } from "./pages/home/Home";
import { List } from "./pages/List/List";

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route index element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/lucros" element={<List type='lcr'></List>}></Route>
        <Route path="/despesas" element={<List></List>}></Route>
        <Route path="/*" element={<h1>Rota não identificada.</h1>}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
