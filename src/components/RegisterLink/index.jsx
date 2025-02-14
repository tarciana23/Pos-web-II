import { useNavigate } from 'react-router-dom'
import {StyledRegisterLink} from './styles'

// eslint-disable-next-line react/prop-types
export default function RegisterLink({text,href}) {
    const navigate = useNavigate();
    return(
        <StyledRegisterLink>
           <span onClick={() => navigate(href)}>
             {text}
            </span>
        </StyledRegisterLink>
    )
}