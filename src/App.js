import './reset.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Swiper from './components/HemopgSecondSwiper';

function App() {
  return (
    <div>
      <Header />
      <Swiper />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
