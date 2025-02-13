import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 0.063rem solid ${({ theme }) => theme.COLORS.BORDERCOLOR};
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
