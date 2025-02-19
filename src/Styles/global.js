import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.PRIMARYCOLOR};


        --webkit-font-smoothings: antialiased;//fontes mais suaveis
    }
    
    body, input , button , textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor:pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9)//vai dar uma escurecida no botao
    }
`;
