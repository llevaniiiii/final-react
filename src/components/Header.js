import logo from "../imgs/logo.png";
import shop from "../imgs/shop.svg";
import login from "../imgs/login.svg";
import { Outlet, Link } from "react-router-dom";
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Header({myseter}) {

    function lang(language) {
        i18n.changeLanguage(language)
      }

    const {t} = useTranslation()

    return(
        <header className="header">
            <img className="logo" src={logo} />
            <nav>
                <ul className="header-ul">
                    <a className="header-li" href="/">{t('მთავარი')}</a>
                    <a className="header-li" href="/products">{t('პროდუქტები')}</a>
                    <li className="header-li">{t('ფასდაკლებები')}</li>
                    <li className="header-li">{t('კონტაქტი')}</li>
                    <li className="header-li">{t('პარტნიორები')}</li>
                </ul>
            </nav>
            <div>
                <button className="button"><img className="shop-logo" src={shop} width="40px"/></button>
                <button onClick={() => myseter(true)} className="button"><img src={login} width="40px"/></button>
            </div>
            <Outlet />
            <div className="language">
                <button onClick={() => lang('ka')}>Ge</button> 
                <button onClick={() => lang('en')}>En</button>
            </div>
        </header>
    )
}