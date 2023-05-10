import { Header } from "../../components/Header/Header"
import { Listc } from "../../components/List/Listc/Listc"

export const List = (props: any)=>{
    console.log(props.type)
    return(
        <>
            <Header></Header>
            {props.type == 'lcr' ? <Listc type='lcr'></Listc> : <Listc type='dsp'></Listc>}
        </>
    )
}