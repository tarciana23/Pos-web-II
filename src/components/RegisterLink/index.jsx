import {StyledRegisterLink} from './styles'

// eslint-disable-next-line react/prop-types
export default function RegisterLink({href,children}) {
    return(
        <StyledRegisterLink>
            {children} <a href={href}>Faça Login</a>
        </StyledRegisterLink>
    )
}