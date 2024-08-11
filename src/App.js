import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import HeroMain from './Components/HeroMain/HeroMain';
import Hero from './Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.css';

import ContentTwo from './Components/ContentTwo/ContentTwo';
import ContentThree from './Components/ContentThree/ContentThree';
import Sponser from './Components/Sponser/Sponser';
import Colaboration from './Components/Colaboration/Colaboration';
import ProTools from './Components/ProTools/ProTools';
import About from './Components/About/About';
import Weather from './Components/Weather/Weather';





function App() {
  return (
    <>
      <Home />
      <Weather/>
      <HeroMain />
      <Hero />
      <Sponser/>
      <ContentTwo />
      <br></br>
      <ContentThree />
      <Colaboration/>
      <ProTools/>
      <About/>

    </>
  );
}

export default App;
