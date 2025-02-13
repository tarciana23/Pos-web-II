import { ImageSectionStyled } from "./styles"

import EnsinaFuturo from "../../assets/EnsinaFuturo.png"

export default function ImageSection() {
    return(
        <ImageSectionStyled>
            <img src={EnsinaFuturo} alt="Logo EnsinaFuturo" />
        </ImageSectionStyled>
    )
}