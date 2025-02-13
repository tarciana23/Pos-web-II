import styled from 'styled-components';

export const FormSectionStyled = styled.section`
    flex: 1;
    width: 50%;
    padding: 1.25rem;
    background-color: #004A61;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        width: 100%;
        padding: 1.25rem;
    }
`;