import styled from "styled-components";

export const StyledButton = styled.button`
  width: 50%;
  padding: 0.625rem;
  border: none;
  background-color: #FFBB00;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
