import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { currencies } from '../data/currencies'
import { useEffect } from 'react'

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

const Formulario = () => {
    
    const [ currency, SelectCurrency ] = useSelectMonedas('Pick your currency', currencies)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const answer = await fetch(url)
            const result = await answer.json()
            console.log(result.data)
        }
        consultarAPI()
    }, [])
    

    return (
        <form 
            action=""
        >
            <SelectCurrency />
            
            {currency}
            
            <InputSubmit 
                type="submit" 
                value='Convert' 
            />
        </form>
    )
}

export default Formulario