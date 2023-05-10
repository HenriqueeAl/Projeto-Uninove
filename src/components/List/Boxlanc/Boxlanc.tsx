import './Boxlanc.scss'
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const Boxlanc = (props: any)=>{
    return(
        <div className='boxlanc'>
            <span className='value' style={props.type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>R$ 10,00 </span>
            <div className='barra'>|</div>
            <span className='name'>Mercado</span>
            <div className='barra'>|</div>
            <span className='datelanc'>17 mar 2023</span>
            <div className='barra'>|</div>
            <div className='icons'>
                <MdEdit className='edit'></MdEdit>
                <RiDeleteBin5Line className='delete'></RiDeleteBin5Line>
            </div>
        </div>
    )
}