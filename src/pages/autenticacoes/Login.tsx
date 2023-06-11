import './Autenticacoes.scss'
import { useState } from 'react';

export const Login = ()=>{
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    return(
        <>
            <h1>Logar</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                fetch('https://profittrack.onrender.com/login',
                {
                    method: 'POST',
                    headers: {
                        'user': user,
                        'password': password
                    }
                }).then(async (e)=> {
                    const data = await e.json()
                    localStorage.setItem('token', data.token)
                    window.location.href= '/'
                })
            }}>
                <input type="text" placeholder="Nome" onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
                <button>Entrar</button>
            </form>
            <div className='register'>
                <span>ou</span>
                <a href="/register">Registrar</a>
            </div>
        </>
    )
}