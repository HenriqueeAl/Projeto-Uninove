import { Header } from "../../components/Header/Header"
import { Listc } from "../../components/List/Listc/Listc"

export const List = (props: any)=>{
    return(
        <>
            <Header></Header>
            {props.type == 'lcr' ? <Listc type='lcr'></Listc> : <Listc type='dsp'></Listc>}
        </>
    )
}