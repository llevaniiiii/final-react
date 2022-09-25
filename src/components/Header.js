import logo from "../imgs/logo.png";
import shop from "../imgs/shop.svg";
import login from "../imgs/login.svg";
import { Outlet, Link } from "react-router-dom";

export default function Header({myseter}) {
    return(
        <header className="header">
            <img className="logo" src={logo} />
            <nav>
                <ul className="header-ul">
                    <a className="header-li" href="/">მთავარი</a>
                    <a className="header-li" href="/products">პროდუქტები</a>
                    <li className="header-li">ფასდაკლებები</li>
                    <li className="header-li">კონტაქტი</li>
                    <li className="header-li">პარტნიორები</li>
                </ul>
            </nav>
            <div>
                <button className="button"><img className="shop-logo" src={shop} width="40px"/></button>
                <button onClick={() => myseter(true)} className="button"><img src={login} width="40px"/></button>
            </div>
            <Outlet />
        </header>
    )
}