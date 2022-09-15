import quality from "./images/quality.svg";
import "./partner.css";

export default function Detals({seter}) {
    return(
        <div className="detals">
            <div className="detalschild">
                <img src={quality} alt="img"/>
                <h2>კოკა-კოლა</h2>
                <p>
                    კოკა-კოლა ბაზარზე წარმოადგენს ნომერ პირველ კომპანიას. მისი პროდუქტები მსოფლიოს მასშტაბით არის მოთხოვნადი. Belarusky Narodny Bank-ის 70% საქართველოს ბანკმა 2008 წლის მაისში შეიძინა, ხოლო 2010 წელს მისი წილი 99.96%-მდე გაზარდა. 2010 წლის ივლისში კი BNB-ს აქციონერი გახდა “World Bank Group”-ის წევრი IFC (საერთაშორისო საფინანსო 
                    კორპორაცია), როდესაც აქციების 19.99% შეიძინა. BNB ემსახურება როგორც  იურიდიულ, ისე ფიზიკურ პირებს და მათ საბანკო მომსახურების სრულ სპექტრს სთავაზობს.
                </p>
                <button onClick={() => seter(false)}>X</button>
            </div>
        </div>
    )
}