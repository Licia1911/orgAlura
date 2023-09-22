import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
    console.log(props)

    //Estado - hooks
    //useState 
    //useState()
    //const [nombreVariable, funcion que actualiza] = useState(valorInicial)

    const [mostrar, setMostrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", mostrar)
        setMostrar(!mostrar)
    }
    return <section className="orgSection">
        <h3 className='title'>Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg