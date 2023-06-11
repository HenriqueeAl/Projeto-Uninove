import { useState } from 'react'
import './Homec.scss'
import { Modal } from '../modal/Modal';

export const Homec = (props: any)=>{
    
    const [modallcr,setModallcr] = useState(false);
    const [modaldsp,setModaldsp] = useState(false);

    return(
        <main className='content'>
            <div>
                <h2>Olá, {props.name}</h2>
                <section className='saldo'>
                    <span>Saldo: {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.balance)}</span>
                </section>
                <div className='btns'>
                    <button className='btn_lcr' onClick={()=>{
                        setModallcr(!modallcr)
                    }}>Lançar lucros</button>
                    <button className='btn_dsp' onClick={()=>{
                        setModaldsp(!modaldsp)
                    }}>Lançar despesas</button>
                </div>
            </div>
            <div className='side_rigth'>
                <section className='lcr_mes'>
                    <span className='lcr_span'>Lucros</span>
                    <span className='lcr_value'>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.lcr)}</span>
                    <a href='/lucros'>Visualisar lucros</a>
                </section>
                <section className='dsp_mes'>
                    <span className='dsp_span'>Despesas</span>
                    <span className='dsp_value'>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.dsp)}</span>
                    <a href='/despesas'>Visualisar despesas</a>
                </section>
            </div>
            {modallcr == true ? <Modal modal={()=>{setModallcr(false)}} type='lcr'></Modal> : <></>}
            {modaldsp == true ? <Modal modal={()=>{setModaldsp(false)}} type='dsp'></Modal> : <></>}
        </main>
    )
}