import './Autenticacoes.scss'

export const Register = ()=>{
    return(
        <>
            <h1>Registrar</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <input type="text" placeholder="Nome"/>
                <input type="password" placeholder="Senha"/>
                <button>Registrar</button>
            </form>
            <div className='register'>
                <span>ou</span>
                <a href="/">Logar</a>
            </div>
        </>
    )
}