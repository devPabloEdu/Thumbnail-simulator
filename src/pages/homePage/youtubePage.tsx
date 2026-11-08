import { Container } from "react-bootstrap";
import './index.scss';
import VideoCard from "../../components/VideoCard/videoCard";
import Img1 from '../../assets/626b2105eca8a62c25bbd9f0_youtube thumbnail size and best practices by veed studio.jpg';
import Img2 from '../../assets/Screenshot_1.png';
import Img3 from '../../assets/Screenshot_2.png';
import EmptyImage from '../../assets/empty.png';
import type { IVideoCard } from "../../types/IVideoCard";

const YoutubePage = ({ channelName, numberOfViews, imgSrc, timeThatPublicated, title, isLive, videoLength }: IVideoCard): React.ReactElement => {
    return (
        <>
            <Container className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-start homePageContainer">
                <VideoCard imgSrc={imgSrc || EmptyImage} title={title || 'Insira um título para seu vídeo'} channelName={channelName || 'Nome do canal'} numberOfViews={numberOfViews || 0} timeThatPublicated={timeThatPublicated || 'Data de publicação'} isLive={isLive} videoLength={videoLength} />
                <VideoCard imgSrc={Img2} title="Genryusai Yamamoto Death Scene || Bleach Thousand Year Blood War" channelName="Shu シュウ" numberOfViews={5310} timeThatPublicated="12/11/2025" />
                <VideoCard imgSrc={Img3} title="Entendendo a inicialização do OpenGL (GLX + C)" channelName="Carrara software" numberOfViews={801000} timeThatPublicated="10/05/2025" />
            </Container>
            <Container className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-start homePageContainer">
                <VideoCard imgSrc={Img1} title="Wich gamer color are you?" channelName="Manware" numberOfViews={106} timeThatPublicated="12/12/2020" />
                <VideoCard imgSrc={Img2} title="Genryusai Yamamoto Death Scene || Bleach Thousand Year Blood War" channelName="Shu シュウ" numberOfViews={53100} timeThatPublicated="12/11/2024" />
                <VideoCard imgSrc={Img3} title="Entendendo a inicialização do OpenGL (GLX + C)" channelName="Carrara software" numberOfViews={8100} timeThatPublicated="12/12/2023" />
            </Container>
        </>
    )
}

export default YoutubePage;