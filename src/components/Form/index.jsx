import { FormStyled } from "./styles"

// eslint-disable-next-line react/prop-types
export default function Form ({children}){
    return(
        <FormStyled>
            {children}
        </FormStyled>
    )
}