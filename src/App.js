import './reset.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Partners from './components/Partners/Partners';
import Advert from './components/advert/advert';
import Popular from './components/popular/popular';
import Swiper from './components/HemopgSecondSwiper/HemopgSecondSwiper';
import Detals from './components/Partners/detals';
import { useState } from 'react';
import Profile from './components/profile/profile';


function App() {

  const [ detalstatus , setdetalstatus] = useState(false)
  const [ profilestate , setprofilestate ] = useState(false)

  return (
    <div>
      <Header myseter={setprofilestate}/>
      {
         profilestate ?
        <Profile myseter={setprofilestate}/>
        :null
      }
      <Advert />
      <Popular />
      <Swiper />
      <Partners seter={setdetalstatus} />
      {
        detalstatus ? 
        <Detals seter={setdetalstatus} /> 
        : null
      }
      <Footer />
    </div>
  );
}

export default App;
