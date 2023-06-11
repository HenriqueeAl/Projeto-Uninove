import { useState } from 'react'
import './Modal.scss'
import { useNavigate } from 'react-router'

export const Modal = ({modal, type}: any)=>{

    const [name,setName] = useState<any>()
    const [value,setValue] = useState<any>()

    const navigate = useNavigate()

    return (
        <>
        <div className='bg_modal_black' onClick={()=>{
            modal()
        }}>
        </div>
        <section className='box_modal'>
            <h3 style={type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>{type == 'lcr' ? 'Lançamento de lucros' : 'Lançamento de despesas'}</h3>
            <div className='dates'>
            </div>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                if(name.length > 3 && value > 0.01){
                    const token = localStorage.getItem('token') || 'n'
                    await fetch('https://profittrack.onrender.com/lanca',
                    {
                        method: 'POST',
                        headers: {
                            'name': name,
                            'value': value,
                            'type': type,
                            'token': token
                        }
                    })
                    
                }
                
                navigate(0)
            }}>
                <input type="text" placeholder='Nome do lançamento' onChange={(e)=>setName(e.target.value)}/>
                <input type="number" step=".01" min=".01" placeholder='Valor do lançamento' className='inpt_lanca' onChange={(e)=>setValue(e.target.value)}/>
                <span className='lanca_rs'>R$</span>
                <button>Lançar</button>
            </form>
        </section>
        </>
    )
}