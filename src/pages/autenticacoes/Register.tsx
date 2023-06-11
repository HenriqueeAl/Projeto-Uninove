import { useState } from 'react';
import './Autenticacoes.scss'

export const Register = ()=>{
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    return(
        <>
            <h1>Registrar</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                fetch('http://localhost:3000/register',
                {
                    method: 'POST',
                    headers: {
                        'user': user,
                        'password': password
                    }
                }).then(async (e)=>{
                    const data = await e.json();
                    if(data.token){
                        localStorage.setItem('token', data.token)
                        window.location.href = '/'
                    }
                })
            }}>
                <input type="text" placeholder="Nome" onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
                <button>Registrar</button>
            </form>
            <div className='register'>
                <span>ou</span>
                <a href="/">Logar</a>
            </div>
        </>
    )
}