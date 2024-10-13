import styled from 'styled-components'
import bannerImage from './assets/banner.png'

const BannerEstilizado = styled.div`
        width: 100%;
        height: 328px;
        border-radius: 20px;
        opacity: 0.8;
        background: url(${bannerImage});
        background-size: cover;
        padding: 92px 64px;
    `

const TextoEstilizado = styled.h1`
        font-size: 40px;
        font-weight: 400;
        width: 300px;
        line-height: 1.2;
        user-select: none;
        color: #FFFFFF;
`


const Banner = () => {
    return(
        <BannerEstilizado>
            <TextoEstilizado>A galeria mais completa de fotos do espaço!</TextoEstilizado>
        </BannerEstilizado>
    )
}

export default Banner;