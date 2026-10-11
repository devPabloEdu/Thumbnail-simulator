import { useState } from "react";
import HeaderBar from "./components/headerBar"
import YoutubePage from "./pages/youtubePage"

function App() {
  const [title, setTitle] = useState<string>('');
  const [channelName, setChannelName] = useState<string>('');
  const [numberOfViews, setNumberOfViews] = useState<number>();
  const [dateOfThePublication, setDateOfThePublication] = useState<string>('');
  const [image, setImage] = useState<string>('');

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

      />
      <YoutubePage
        title={title}
        channelName={channelName}
        numberOfViews={numberOfViews}
        timeThatPublicated={dateOfThePublication}
        imgSrc={image}
      />
    </>
  )
}

export default App
