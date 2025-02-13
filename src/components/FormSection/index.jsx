import { FormSectionStyled } from './styles';

// eslint-disable-next-line react/prop-types
export default function FormSection ({children}) {
    return(
        <FormSectionStyled>
            {children}
        </FormSectionStyled>
    )
}