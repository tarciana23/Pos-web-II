import { FormGroupStyled } from "./styles"

// eslint-disable-next-line react/prop-types
export default function FormGroup({children}){
    return(
        <FormGroupStyled>
            {children}
        </FormGroupStyled>
    )
}