import styled from '@emotion/styled'
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

const Formulario = () => {
    
    const [ SelectCurrency ] = useSelectMonedas('Pick your currency', currencies)

    return (
        <form 
            action=""
        >
            <SelectCurrency />
            <InputSubmit 
                type="submit" 
                value='Convert' 
            />
        </form>
    )
}

export default Formulario