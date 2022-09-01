import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import suma from './components/math'
import Aside from './components/Aside'

function App() {
  const [data, setData] = useState({})
  const [resultado, setResultado] = useState()


  function calcular(props) {
    const { cantidad, graduacion, sexo, peso} = props
    setResultado(suma(graduacion, cantidad, peso, sexo))
  }

  return (
    <div className="App">
      <Aside/>
      <Main resultado={resultado} calculo={calcular}/>
    </div>
  )
}

export default App
