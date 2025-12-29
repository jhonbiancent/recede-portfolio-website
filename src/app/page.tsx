import FirstPage from "./firstPage";
import HobbyPage from "./hobbyPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import FifthPage from "./fifthPage";
import SixthPage from "./sixthPage";
import NavigationBar from "./navbar";
import ClickSpark from "../components/ClickSpark";
import Darkgradient from "./darkgradient";
export default function Home() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NavigationBar/>
        <FirstPage />
        <SecondPage />
        <HobbyPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage/>
        <SixthPage/>
        <Darkgradient/>
      </ClickSpark>
    </>
  );
}
