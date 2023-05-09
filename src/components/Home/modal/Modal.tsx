import './Modal.scss'

export const Modal = ({modal, type}: any)=>{
    return (
        <>
        <div className='bg_modal_black' onClick={()=>{
            modal()
        }}>
        </div>
        <section className='box_modal'>
            <h3 style={type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>{type == 'lcr' ? 'Lançamento de lucros' : 'Lançamento de despesas'}</h3>
            <div className='date'>
                <div className='date'>30 <img src="/select.png" alt="select"/></div>
                <div className='date'>mar <img src="/select.png" alt="select"/></div>
                <div className='date'>2023 <img src="/select.png" alt="select"/></div>
            </div>
            <form>
                <input type="text" placeholder='Nome do lançamento'/>
                <input type="text" placeholder='Valor do lançamento' className='inpt_lanca'/>
                <span className='lanca_rs'>R$</span>
                <button>Lançar</button>
            </form>
        </section>
        </>
    )
}