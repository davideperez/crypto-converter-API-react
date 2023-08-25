import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    color: #FFF;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7a7dfe
        cursor: pointer;
    }
`

const Formulario = ({setCurrencies}) => {
    const [ cryptos, setCryptos  ] = useState([])
    const [ error, setError ] = useState(false)
    
    const [ currency, SelectCurrency ] = useSelectMonedas('Pick your currency', currencies)
    const [ cryptoCurrency, SelectCryptoCurrency ] = useSelectMonedas('Pick your crypto-currency', cryptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const answer = await fetch(url)
            const result = await answer.json()

            const arrayCryptos = result.Data.map(crypto => {

                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName,
                }
                return object
            })
            setCryptos(arrayCryptos)
        }
        consultarAPI()
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()

        if ([currency, cryptoCurrency].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setCurrencies({
            currency,
            cryptoCurrency
        })
    }

    return (
        <>
            {error && <Error> All fields are mandatory</Error> }
            <form
                onSubmit={handleSubmit}
                >
                <SelectCurrency />
                <SelectCryptoCurrency />
                
                <InputSubmit 
                    type="submit" 
                    value='Convert' 
                    />
            </form>
        </>
    )
}

export default Formulario