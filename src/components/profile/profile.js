import style from './profile.css';
import { useState } from 'react';

export default function Profile({myseter}) {
    const [ loginstate , setloginstate  ] = useState(true)
    return(
        <div>
        {loginstate ?         <section className="section">
        <form class="sign-in-form" method="POST">
        <div className='fixer'><div onClick={() => setloginstate(true)}>ავტორიზაცია</div> <div className='text1' onClick={() => setloginstate(false)} >რეგისტრაცია</div></div>
            <div class="sign-in-info">
                <input type="text" name="username" id="username" placeholder="ტელეფონი / ელ.ფოსტა" /> 
            </div>
            <div class="sign-in-info">
                <input type="password" name="password" id="password" placeholder="პაროლი" />
            </div>
            <div>
                <input class="sign-in-submit" type="submit" value="შესვლა" />
            </div>
            <div class="repassword" > პაროლის აღდგენა </div>
                <button onClick={() => myseter(false)}>X</button>
        </form>
  </section> : 
  <div>

<section className="section">
        <form class="sign-in-form" method="POST">
            <div className='fixer'><div onClick={() => setloginstate(true)}>ავტორიზაცია</div> <div className='text1' onClick={() => setloginstate(false)} >რეგისტრაცია</div></div>
            <div class="sign-in-info">
                <input type="text" name="username" id="username" placeholder="სახელი" /> 
            </div>
            <div class="sign-in-info">
                <input type="text" name="password" id="username" placeholder="გვარი" />
            </div>
            <div class="sign-in-info">
                <input type="text" name="password" id="username" placeholder="ტელეფონი" />
            </div>
            <div class="sign-in-info">
                <input type="text" name="password" id="username" placeholder="ელ - ფოსტა" />
            </div>
            <div class="sign-in-info">
                <input type="password" name="password" id="password" placeholder="პაროლი" />
            </div>
            <div class="sign-in-info">
                <input type="password" name="password" id="password" placeholder="გაიმეორეთ პაროლი" />
            </div>
            <div>
                <input class="sign-in-submit" type="submit" value="რეგისტრაცია" />
            </div>
                <div class="repassword" onClick={() => setloginstate(true)} > ავტორიზაცია </div>
                <button onClick={() => myseter(false)}>X</button>
        </form>
  </section>

    </div>}
  </div>
    )
}