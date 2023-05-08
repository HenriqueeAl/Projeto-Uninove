import './Autenticacoes.scss'

export const Login = ()=>{
    return(
        <>
            <h1>Logar</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <input type="text" placeholder="Nome"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
            </form>
            <div className='register'>
                <span>ou</span>
                <a href="/register">Registrar</a>
            </div>
        </>
    )
}