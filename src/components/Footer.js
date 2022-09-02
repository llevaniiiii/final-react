import logo from "../imgs/logo.png";
import fb from "../imgs/fb.png"
import telephone from "../imgs/telephone.png"
import email from "../imgs/email.png"

export default function Footer() {
    return(
        <footer className="footer">
            <img className="logo" src={logo}/>
            <div className="footer-about-div">
                <h3>წესები და პირობები</h3>
                <p>მაღაზიის პოლიტიკა</p>
                <p>გადახდის მეთოდები</p>
                <p>უსაფრთხოება</p>
                <p>ჩქარი ლინკები</p>
            </div>
            <div className="footer-contact-div">
                <h3>საკონტაქტო</h3>
                <div>
                    <img src={telephone} width="15px"/>
                    <p>5978568645</p>
                </div>
                <div>
                    <img src={email} width="15px"/>
                    <p>info@bestchoice.ge</p>
                </div>
                <div>
                    <img src={fb} width="15px"/>
                    <p>Facebook.com</p>
                </div>
            </div>
        </footer>
    )
}