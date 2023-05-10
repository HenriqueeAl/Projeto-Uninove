import './Header.scss'
import { BsFillGearFill } from 'react-icons/bs';
import { useState } from 'react';

export const Header = ()=>{

    const [gear,setGear] = useState(false);

    return(
        <header>
            <div className='container'>
                <a className='logo' href='/home'></a>
                <div className='configs'>
                    <BsFillGearFill className='gear' onClick={()=>{
                        setGear(!gear)
                    }}></BsFillGearFill>
                    {gear == true ? 
                    <div className='exit'>
                        <span>Sair</span>
                    </div>
                    :
                    <></>}
                </div>
            </div>
        </header>
    )
}