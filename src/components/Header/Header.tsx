import './Header.scss'
import { BsFillGearFill } from 'react-icons/bs';
import { useState } from 'react';

export const Header = ()=>{

    const [gear,setGear] = useState(false);

    return(
        <header>
            <div className='container'>
                <a className='logo' href='/'><img src="logo.png" alt="logo" /></a>
                <div className='configs'>
                    <BsFillGearFill className='gear' onClick={()=>{
                        setGear(!gear)
                    }}></BsFillGearFill>
                    {gear == true ? 
                    <div className='exit'>
                        <span onClick={()=>{
                            localStorage.removeItem('token')
                            window.location.href = '/' 
                        }}>Sair</span>
                    </div>
                    :
                    <></>}
                </div>
            </div>
        </header>
    )
}