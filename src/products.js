import style from './products.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Products() {

    return(
        <div>
        <Header/>
        <div className="Pr_Head">
            <div className='Pr_All'> 
            <div className="Pr_Left">
            <div className="Pr_Left_Cont">ყველა კატეგორია</div>
            <div className="Pr_Left_text">კომპიუტერები (27)</div>
            <div className="Pr_Left_text">ნოუთბუქები(127)</div>
            <div className="Pr_Left_text">მონიტორები (45)</div>
            <div className="Pr_Left_text">ტელეფონები (256)</div>
            <div className="Pr_Left_text">ტელევიზორები (45)</div>
            <div className="Pr_Left_text">ყურსასმენები (59)</div>
            <div className="Pr_Left_text">კლავიატურები (226)</div>
            </div>
        <div className="Pr_Main">

<div className="Pr_Item">
<div className="Pr_Item_Image"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">Iphone 13</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>
<div className="Pr_Item">
<div className="Pr_Item_Image2"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">Samsung case</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>
<div className="Pr_Item">
<div className="Pr_Item_Image3"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">MacBook Air</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>
<div className="Pr_Item">
<div className="Pr_Item_Image4"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">PS 5</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>
<div className="Pr_Item">
<div className="Pr_Item_Image5"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">Iphone 12 case</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>
<div className="Pr_Item">
<div className="Pr_Item_Image6"></div>
<div className="Pr_Item_Text_Cont">
<div className="Pr_Item_Text">Personal Computer</div>
<a className="Pr_Item_button1" href="/product">მეტი ინფორმაცია</a>
<div className="Pr_Item_button2">კალათაში დამატება</div>
</div>
</div>



</div>
            </div>
</div>
        <Footer/>
        </div>
    )
}