import logo from "../imgs/logo.png";
import shop from "../imgs/shop.svg";
import login from "../imgs/login.svg";

export default function Header() {
    return(
        <header className="header">
            <img className="logo" src={logo} />
            <nav>
                <ul className="header-ul">
                    <li className="header-li">მთავარი</li>
                    <li className="header-li">პროდუქტები</li>
                    <li className="header-li">ფასდაკლებები</li>
                    <li className="header-li">კონტაქტი</li>
                    <li className="header-li">პარტნიორები</li>
                </ul>
            </nav>
            <div>
                <img className="shop-logo" src={shop} width="40px"/>
                <img src={login} width="40px"/>
            </div>
        </header>
    )
}