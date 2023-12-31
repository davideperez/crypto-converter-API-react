import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Result from './components/Result'
import ImagenCripto from './img/imagen-criptos.png'
//import { currencies } from './data/currencies'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display:block;
    margin: 10px auto 0 auto;
  }

`

function App() {

  const [currencies, setCurrencies ] = useState({})
  const [result, setResult ] = useState({})


  useEffect(() => {
    // Validates the object currencies is not empty.
    if(Object.keys(currencies).length > 0) {
      
      //defines function to convert cryptos.
      const convertCrypto = async () => {
        const { currency, cryptoCurrency } = currencies

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`

        const answer = await fetch(url)
        const result = await answer.json()

        setResult(result.DISPLAY[cryptoCurrency][currency])
      }
      
      //calls the function to convert cryptos
      convertCrypto()
    }
    
  }, [currencies])
  

  return (
    <>
      <Contenedor>
        <Imagen 
          src={ImagenCripto}
          alt='imagenes criptomonedas'
        />
        <div>
          <Heading>Quick Crypto Converter</Heading>
          <Formulario
            setCurrencies={setCurrencies}
            />
          
          { result.PRICE && <Result result={result} /> }

        </div>
      </Contenedor>
    

    </>
  )
}

export default App