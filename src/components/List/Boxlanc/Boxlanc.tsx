import './Boxlanc.scss'
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export const Boxlanc = (props: any)=>{
    console.log(props)
    const navigate = useNavigate()
    return(
        <div className='boxlanc'>
            <span className='value' style={props.data.type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>{props.data.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
            <div className='barra'>|</div>
            <span className='name'>{props.data.name}</span>
            <div className='barra'>|</div>
            <div className='icons'>
                <RiDeleteBin5Line className='delete' onClick={()=>{
                    fetch('http://localhost:3000/delete',
                    {
                        method: 'POST',
                        headers: {
                            'token': localStorage.getItem('token'),
                            'id': props.data.id
                        }
                    }).then(async(e)=>{
                      const data = await e.json()
                      navigate(0)
                    })
                }}></RiDeleteBin5Line>
            </div>
        </div>
    )
}
