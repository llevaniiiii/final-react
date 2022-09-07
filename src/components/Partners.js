import quality from "../imgs/quality.svg";
import resell from "../imgs/resell.svg";
import cola from "../imgs/cola.png"
import chanel from "../imgs/chanel.png"
import apple from "../imgs/apple.png"

export default function Partners() {
    return(
        <section>
            <h2 className="partner-title">პარტნიორები</h2>
            <div className="partners-card-wrapper">
                <div className="partner-card">
                        <img src={cola} width="120px" />
                        <div className="partner-card-text">
                            <h3>კოკა_კოლა</h3>
                            <div className="partner-p-div">
                                <p>დეტალური აღწერა</p>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality}/>
                            <img src={resell}/>
                        </div>
                    </div>
                    <div className="partner-card">
                        <img src={chanel} width="110px" />
                        <div className="partner-card-text">
                            <h3>Chanel</h3>
                            <div className="partner-p-div">
                                <p>დეტალური აღწერა</p>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality}/>
                            <img src={resell}/>
                        </div>
                    </div>
                    <div className="partner-card">
                        <img src={apple} width="110px" />
                        <div className="partner-card-text">
                            <h3>Apple</h3>
                            <div className="partner-p-div">
                                <p>დეტალური აღწერა</p>
                            </div>
                        </div>
                        <div className="partner-card-img">
                            <img src={quality}/>
                            <img src={resell}/>
                    </div>
                </div>
            </div>
        </section> 
    )
}