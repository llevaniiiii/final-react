import logo from "../imgs/logo.png";
import fb from "../imgs/fb.png"
import telephone from "../imgs/telephone.png"
import email from "../imgs/email.png"
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const {t} = useTranslation()

    return(
        <footer className="footer">
            <img className="logo" src={logo}/>
            <div className="footer-about-div">
                <h3>{t('წესები და პირობები')}</h3>
                <p>{t('მაღაზიის პოლიტიკა')}</p>
                <p>{t('გადახდის მეთოდები')}</p>
                <p>{t('უსაფრთხოება')}</p>
            </div>
            <div className="footer-contact-div">
                <h3>{t('საკონტაქტო')}</h3>
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