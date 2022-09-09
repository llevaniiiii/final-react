import './reset.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Swiper from './components/HemopgSecondSwiper';
import Advert from './components/advert/advert';
import Popular from './components/popular/popular';

function App() {
  return (
    <div>
      <Header />
      <Advert />
      <Popular />
      <Swiper />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
