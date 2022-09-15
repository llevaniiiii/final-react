import quality from "./images/quality.svg";
import resell from "./images/resell.svg";
import cola from "./images/cola.png";
import chanel from "./images/chanel.png";
import apple from "./images/apple.png";
import "./partner.css";

export default function Partners({seter}) {
    
    return(
        <section>
            <h2 className="partner-title">პარტნიორები</h2>
            <div className="partners-card-wrapper">
                <div className="partner-card">
                        <img src={cola} alt="img" width="120px" />
                        <div className="partner-card-text">
                            <h3>კოკა_კოლა</h3>
                            <div className="partner-p-div">
                                <button onClick={() => seter(true)}>დეტალური აღწერა</button>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality} alt="img"/>
                            <img src={resell} alt="img"/>
                        </div>
                    </div>
                    <div className="partner-card">
                        <img src={chanel} alt="img" width="110px" />
                        <div className="partner-card-text">
                            <h3>Chanel</h3>
                            <div className="partner-p-div">
                                <button onClick={() => seter(true)}>დეტალური აღწერა</button>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality} alt="img"/>
                            <img src={resell} alt="img"/>
                        </div>
                    </div>
                    <div className="partner-card">
                        <img src={apple} alt="img" width="110px" />
                        <div className="partner-card-text">
                            <h3>Apple</h3>
                            <div className="partner-p-div">
                                <button onClick={() => seter(true)}>დეტალური აღწერა</button>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality} alt="img"/>
                            <img src={resell} alt="img"/>
                    </div>
                </div>
            </div>
        </section> 
    )
}