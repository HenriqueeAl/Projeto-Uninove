import { useState } from 'react'
import './Homec.scss'
import { Modal } from '../modal/Modal';

export const Homec = ()=>{
    const [modallcr,setModallcr] = useState(false);
    const [modaldsp,setModaldsp] = useState(false);
    return(
        <main className='content'>
            <div>
                <h2>Olá, Henrique</h2>
                <section className='saldo'>
                    <span>Saldo: R$ 1.000,00</span>
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
                <h3>Mar 2023</h3>
                <section className='lcr_mes'>
                    <span className='lcr_span'>Lucros</span>
                    <span className='lcr_value'>R$ 850,00</span>
                    <button>Visualisar outros meses</button>
                </section>
                <section className='dsp_mes'>
                    <span className='dsp_span'>Despesas</span>
                    <span className='dsp_value'>R$ 850,00</span>
                    <button>Visualisar outros meses</button>
                </section>
            </div>
            {modallcr == true ? <Modal modal={()=>{setModallcr(false)}} type='lcr'></Modal> : <></>}
            {modaldsp == true ? <Modal modal={()=>{setModaldsp(false)}} type='dsp'></Modal> : <></>}
        </main>
    )
}