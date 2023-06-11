import { useEffect, useState } from 'react'
import { Boxlanc } from '../Boxlanc/Boxlanc'
import './List.scss'

export const Listc = (props: any)=>{

    const [list, setList] = useState([]);

    useEffect(()=>{
        if(props.type == 'lcr'){
            fetch('http://localhost:3000/lcr',
                {
                    method: 'GET',
                    headers: {
                        'token': localStorage.getItem('token')
                    }
                }).then(async (e)=> {
                    const data = await e.json()
                    setList(data.data)
                })
        }else{
            fetch('http://localhost:3000/dsp',
                {
                    method: 'GET',
                    headers: {
                        'token': localStorage.getItem('token')
                    }
                }).then(async (e)=> {
                    const data = await e.json()
                    setList(data.data)
                })
        }
    }, [])
    return(
        <section className='list'>
            <h1 className='h1lcr' style={props.type == 'lcr' ? {color: '#28FF00'} : {color: '#FF0000'}}>{props.type == 'lcr' ? 'LUCROS' : 'DESPESAS'}</h1>
            <div className='listlanc'>
                {list.map(e => <Boxlanc data={e}></Boxlanc>)}
            </div>
        </section>
    )
}