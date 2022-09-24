import './Oneproduct.css';
import phonecase from "./images/phonecase.jpg";
import phonecase2 from './images/phonecase2.jpg';
import phonecase3 from './images/phonecase3.jpg';
import phonecase4 from './images/phonecase4.jpg';
import case1 from './images/case1.jpg'
import case3 from './images/case3.jpg'
import case5 from './images/case5.jpg'

import footer from '../Footer';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { useState } from 'react';
import Footer from '../Footer';

export default function Oneproduct() {

    const [numberproduct, setnumberproduct] = useState (1);

    return (
        <section>
            <div className='swiperAndPrise'>
                <div className='mySwiperdiv'>
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <img src={phonecase} alt="case" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={phonecase2} alt="case" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={phonecase3} alt="case" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='phonecase' src={phonecase4} alt="case" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='productBuyWrapper'>
                    <p>80 ₾</p>
                    <div className='wtatproduct'>
                        <p>ტიპი: დამცავი ქეისი</p>
                        <p>თავსებადობა: Samsung Galaxy Note 10+</p>
                        <p>მასალა: სილიკონი</p>
                    </div>
                    <button className='shopbutton'>კალათაში დამატება</button>
                    <div className='dummy'>
                       <button onClick={() => setnumberproduct(1)}>-</button>
                       <p>{numberproduct}</p>
                       <button onClick={() => setnumberproduct(numberproduct + 1)}>+</button>
                    </div>
                </div>
            </div>
            <div className='about'>
                <p>
                    ძალიან თხელი გამჭირვალე დამცავი ბუდე სპეციალური ტექნოლოგიით შესრულებული, 
                    რომელიც ფერს არ იცვლის დროთა განმავლობაში.
                </p>
                <div>
                    <p>• მაღაზიის ფასი</p>
                    <p>• უფასო მიწოდება 50 ლარიდან</p>
                    <p>• მიწოდება თბილისში 1-3 სამუშაო დღე</p>
                    <p>• მიწოდება საქართველოს მასშტაბით 3-5 სამუშაო დღე</p>
                    <p>• გადახდა ნებისმიერი ბანკის ბარათით ან განვადებით</p>
                </div>  
                <button>მეტის ნახვა</button>
            </div>
            <div>
                <h2>მსგავსი პროდუქტები</h2>
                <div className='sameproduct'>
                    <img src={case1} alt="case"/>
                    <img src={case3} alt="case"/>
                    <img src={case5} alt="case"/>
                </div>
            </div>
            <Footer />
        </section>
    );
}