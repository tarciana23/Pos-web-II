import styled from "styled-components";

export const ImageSectionStyled = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 82%;
    height: auto;
    object-fit: cover;
    max-height: 100%;
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    display: none;
  }
`;
