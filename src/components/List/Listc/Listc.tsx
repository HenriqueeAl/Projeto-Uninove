import { Boxlanc } from '../Boxlanc/Boxlanc'
import './List.scss'

export const Listc = (props: any)=>{
    console.log(props.type)
    return(
        <section className='list'>
            <h1 className='h1lcr' style={props.type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>{props.type == 'lcr' ? 'LUCROS' : 'DESPESAS'}</h1>
            <input type="text" placeholder={props.type == 'lcr' ? 'Pesquise seus lucros' : 'Pesquise suas despesas'}/>
            <div className='dates'>
                <div className='date'>mar <img src="/select.png" alt="select"/></div>
                <div className='date'>2023 <img src="/select.png" alt="select"/></div>
            </div>
            <div className='listlanc'>
                <Boxlanc type={props.type}></Boxlanc>
                <Boxlanc type={props.type}></Boxlanc>
                <Boxlanc type={props.type}></Boxlanc>
                <Boxlanc type={props.type}></Boxlanc>
            </div>
        </section>
    )
}