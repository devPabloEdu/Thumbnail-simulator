import { Col, Row } from "react-bootstrap";
import { FiRadio } from "react-icons/fi";
import './index.scss';
import type { IVideoCard } from "../../types/IVideoCard"
import { CiPlay1 } from "react-icons/ci";
import { renderViews } from "../../utils/renderViews";
import { renderDate } from "../../utils/renderDate";
const VideoCard = ({ title, channelName, numberOfViews, timeThatPublicated, imgSrc, isLive }: IVideoCard): React.ReactElement => {
    return <div className="d-flex flex-column p-2 VideoCardContainer">
        <Row className="thumbnailWrapper">
            <img src={imgSrc} alt="" />
            {isLive && (
                <span className="aoVivoSpan">
                    <FiRadio size={12} /> AO VIVO
                </span>
            )}
        </Row>
        <Row className="mt-1"><h2>{title}</h2></Row>
        <Row className="d-flex flex-row RowVideoCardInfos">
            <Col className="m-0 p-0 text-nowrap"><span>{channelName}</span></Col>
            <Col className="m-0 p-0 text-nowrap"><span><CiPlay1 size={14} /> {renderViews(Number(numberOfViews))} {isLive && 'assistindo agora'}</span></Col>
            {!isLive && <Col className="m-0 p-0 text-nowrap"><span>{renderDate(String(timeThatPublicated))}</span></Col>}
        </Row>
    </div>
}

export default VideoCard;