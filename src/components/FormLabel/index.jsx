import {FormLabelStyled} from "./styles"

// eslint-disable-next-line react/prop-types
export default function FormLabel({children, htmlFor}){
    return(
        <FormLabelStyled htmlFor={htmlFor}>
            {children}
        </FormLabelStyled>
    )

}