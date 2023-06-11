import { Header } from '../../components/Header/Header'
import { Homec } from '../../components/Home/homec/Homec'
import './Home.scss'

export const Home = (props: any)=>{
    console.log(props)
    return(
        <>
            <Header></Header>
            <Homec name={props.name} balance={props.balance} lcr={props.lcr} dsp={props.dsp}></Homec>
        </>
    )
}