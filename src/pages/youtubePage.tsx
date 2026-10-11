import { Container } from "react-bootstrap";
import VideoCard from "../components/VideoCard/videoCard";
import Img1 from '../assets/626b2105eca8a62c25bbd9f0_youtube thumbnail size and best practices by veed studio.jpg';
import Img2 from '../assets/Screenshot_1.png';
import Img3 from '../assets/Screenshot_2.png';
import EmptyImage from '../assets/empty.png';
import type { IVideoCard } from "../types/IVideoCard";

const YoutubePage = ({channelName, numberOfViews, imgSrc, timeThatPublicated, title}: IVideoCard): React.ReactElement => {
    return (
        <>
        <Container className="d-flex flex-row gap-3 justify-content-center align-items-start">
            <VideoCard imgSrc={imgSrc || EmptyImage} title={title || 'Insira um título para seu vídeo'} channelName={channelName || 'Nome do canal'} numberOfViews={numberOfViews || 0} timeThatPublicated={timeThatPublicated || 'Data de publicação'} />
            <VideoCard imgSrc={Img2} title="Genryusai Yamamoto Death Scene || Bleach Thousand Year Blood War" channelName="Shu シュウ" numberOfViews={531} timeThatPublicated="3 anos" />
            <VideoCard imgSrc={Img3} title="Entendendo a inicialização do OpenGL (GLX + C)" channelName="Carrara software" numberOfViews={801} timeThatPublicated="1 ano" />
        </Container>
        <Container className="d-flex flex-row gap-3 justify-content-center align-items-start">
            <VideoCard imgSrc={Img1} title="Wich gamer color are you?" channelName="Manware" numberOfViews={106} timeThatPublicated="1 mês" />
            <VideoCard imgSrc={Img2} title="Genryusai Yamamoto Death Scene || Bleach Thousand Year Blood War" channelName="Shu シュウ" numberOfViews={531} timeThatPublicated="3 anos" />
            <VideoCard imgSrc={Img3} title="Entendendo a inicialização do OpenGL (GLX + C)" channelName="Carrara software" numberOfViews={801} timeThatPublicated="1 ano" />
        </Container>
        </>
    )
}

export default YoutubePage;