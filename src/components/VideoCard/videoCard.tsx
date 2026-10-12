import { Col, Row } from "react-bootstrap";
import './index.scss';
import type { IVideoCard } from "../../types/IVideoCard"
import { CiPlay1 } from "react-icons/ci";
import { renderViews } from "../../utils/renderViews";
import { renderDate } from "../../utils/renderDate";
const VideoCard = ({ title, channelName, numberOfViews, timeThatPublicated, imgSrc }: IVideoCard): React.ReactElement => {
    return <div className="d-flex flex-column p-2 VideoCardContainer">
        <Row><img src={imgSrc} alt="" width={112} /></Row>
        <Row className="mt-1"><h2>{title}</h2></Row>
        <Row className="d-flex flex-row RowVideoCardInfos">
            <Col className="m-0 p-0 text-nowrap"><span>{channelName}</span></Col>
            <Col className="m-0 p-0 text-nowrap"><span><CiPlay1 size={14} /> {renderViews(Number(numberOfViews))}</span></Col>
            <Col className="m-0 p-0 text-nowrap"><span>{renderDate(String(timeThatPublicated))}</span></Col>
        </Row>
    </div>
}

export default VideoCard;