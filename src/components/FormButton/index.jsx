import {StyledButton} from './styles'
// eslint-disable-next-line react/prop-types
export default function FormButton({type,children}){
    return(
        <StyledButton type={type}>
            {children}
        </StyledButton>
    )
}