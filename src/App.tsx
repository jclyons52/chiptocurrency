import { ParallaxProvider } from "react-scroll-parallax";
import { BulletPoints } from "./sections/BulletPoints";
import { Title } from "./sections/Title";
import { TopBar } from "./sections/TopBar";

const cryptoName = "CHIPTOCURRENCY";


function App() {
  return (
    <ParallaxProvider>
      <TopBar name={cryptoName} />
      <Title cryptoName={cryptoName} />
      <BulletPoints />
    </ParallaxProvider>
  );
}

export default App;
