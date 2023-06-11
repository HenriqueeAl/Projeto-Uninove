import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/autenticacoes/Login";
import { Register } from "./pages/autenticacoes/Register";
import { Home } from "./pages/home/Home";
import { List } from "./pages/List/List";
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';

function App() {
  const logged = localStorage.getItem('token')

  const [name,setName] = useState('');
  const [balance,setBalance] = useState(0);
  const [lcr,setLcr] = useState(0);
  const [dsp,setDsp] = useState(0);

  useEffect(()=>{
    const token = localStorage.getItem('token') || 'n'
    if(localStorage.getItem('token') != 'n'){
      fetch('https://profittrack.onrender.com/infos',
      {
          method: 'POST',
          headers: {
              'token': token
          }
      }).then(async(e)=>{
        const data = await e.json()
        setName(data.name)
        setBalance(data.balance)
        setLcr(data.lcr)
        setDsp(data.dsp)
      })
    }
  }, [])

  return (
     <BrowserRouter>
      <Routes>
        <Route index element={logged ? <Home name={name} balance={balance} lcr={lcr} dsp={dsp}></Home> : <Login></Login>}></Route>
        <Route path="/register" element={logged ? <Navigate to='/'></Navigate> : <Register></Register>}></Route>
        <Route path="/lucros" element={<List type='lcr'></List>}></Route>
        <Route path="/despesas" element={<List></List>}></Route>
        <Route path="/*" element={<h1>Rota não identificada.</h1>}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
