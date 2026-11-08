import { useState } from "react";
import HeaderBar from "./components/headerBar"
import YoutubePage from "./pages/homePage/youtubePage"

function App() {
  const [title, setTitle] = useState<string>('');
  const [channelName, setChannelName] = useState<string>('');
  const [numberOfViews, setNumberOfViews] = useState<number>();
  const [dateOfThePublication, setDateOfThePublication] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [isLive, setIsLive] = useState<boolean>(false);
  const [videoLength, setVideoLength] = useState<string>('');
  const [channelIcon, setChannelIcon] = useState<string>('');

  return (
    <>
      <HeaderBar
        title={title}
        setTitle={setTitle}
        channelName={channelName}
        setChannelName={setChannelName}
        numberOfViews={Number(numberOfViews)}
        setNumberOfViews={setNumberOfViews}
        dateOfThePublication={dateOfThePublication}
        setDateOfThePublication={setDateOfThePublication}
        image={image}
        setImage={setImage}
        isLive={isLive}
        setIsLive={setIsLive}
        videoLength={videoLength}
        setVideoLength={setVideoLength}
        channelIcon={channelIcon}
        setChannelIcon={setChannelIcon}
      />
      <YoutubePage
        title={title}
        channelName={channelName}
        numberOfViews={numberOfViews}
        timeThatPublicated={dateOfThePublication}
        imgSrc={image}
        isLive={isLive}
        videoLength={videoLength}
        channelIcon={channelIcon}
      />
    </>
  )
}

export default App
