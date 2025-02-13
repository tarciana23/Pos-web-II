import { ContainerStyled } from "./style"

// eslint-disable-next-line react/prop-types
export default function Container({children}) {
    return(
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}