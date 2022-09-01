import { useState } from 'react'
export default function Main(props) {
    const [ingresado, setIngresado] = useState({
        cantidad: 0,
        graduacion: 0,
        sexo: '',
        peso: 0
    })

    function changeHandler(event) {
        const { name, value } = event.target
        setIngresado(prev =>{
            return {
                ...prev, [name]: value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        props.calculo(ingresado)
        
    }

    const [country, setCountry] = useState(0.5)
    function handlerPais(evento) {
        if(evento.target.value == 'argentina'){
            setCountry(0.5)
        } else if(evento.target.value == 'norteamerica'){
            setCountry(0.8)
        } else if(evento.target.value == 'europa') {
            setCountry(0.6)
        } else{
            setCountry(0.2)
        }
    }
    const styleOk = {
        color: 'green'
    }
    const styleNotOk = {
        color: 'red'
    }

    
    

    return (
        <div className="contenedor">
            <div className="headers">
                <h1>Calculadora de gramos de alcohol en sangre</h1>
                <h3>Creado solo con fines educativos. La concentración de alcohol en sangre al manejar debería ser siempre de 0gr</h3>
            </div>
            <div className="contenido">
                <form onSubmit={submitHandler} className='form' action="">
                    <input required onChange={changeHandler} name='cantidad' type="number" placeholder='Cantidad ingerida (ml)'/>
                    <input required onChange={changeHandler} name='graduacion' type="number" placeholder='Graduación alcohólica..'/>
                    <select required onChange={changeHandler} name='sexo' >
                        <option value="">-Elegir-</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                    <input required onChange={changeHandler} name='peso' type="number" placeholder='Peso (kg)'/>
                    <button className='calcularBtn'>CALCULAR</button>
                </form>
                <div className="contenedor-main">
                    <div className="contenedor-prim">
                        <select onChange={handlerPais} className='pais' name="" id="">
                            <option value="argentina">Argentina - Limite: 0.5</option>
                            <option value="brasil">Brasil - Limite: 0.2</option>
                            <option value="norteamerica">Norteamérica - Limite: 0.8</option>
                            <option value="europa">Europa - Limite: 0.6</option>
                        </select>
                    </div>
                    <div className="contenedor-sec">
                        <h1>{props.resultado && `Alcohól por litro de sangre: ${props.resultado}gr`}</h1>
                        <h3 style={props.resultado > country ? styleNotOk: styleOk}>{props.resultado && (props.resultado > country ? 'usted no puede conducir': 'usted puede conducir')}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}