import {useState} from 'react';

import './style.css';

export default function Contador() {
    const [contador,setContador] = useState(0);

    const [passo, setPasso] = useState(1);

    function incrementar() {
        setContador(valorAnterior => valorAnterior + passo);
    }

    function decrementar() {
        setContador(valorAnterior => valorAnterior - passo)
    }

    function resetar() {
        setContador(0);
    }

    return(
        <div className='card-exemplo'>
            <div className='card-header'>

                <span className='bagde'>1. Estado numérico</span>
                <h3>Contador com Passo Customizado</h3>
            </div>
            <div className='contador-display'>
                <span className='numero-contador'>{contador}</span>

            </div>

            <div className='passo-container'>
                <label htmlFor='passo-input'>
                    Passo de incremento:
                </label>
                <input type='number' min={1} max={10} value={passo} id= 'passo-input' 
                onChange={(e) => setPasso(Number(e.target.value))}/>
                
               
            </div>

            <div className='botoes-group'>
                <button className='btn btn-decrementar'
                onClick={decrementar}> - {passo}
                </button>

                <button className='btn-resetar'
                onClick={resetar}> Zerar 
                </button>

                <button className='btn-incrementar' 
                onClick={incrementar}> + {passo}
                </button>
                </div>
            <div className='explicacao-box'>
                    <code>const [contador,setContador] = useState(0);</code>
                    <p>O estado armazena o valor númerico que é renderizado a cada alteração</p>
                </div>
        </div>

    )



}