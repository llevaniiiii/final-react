import style from './profile.css';

export default function Profile({myseter}) {
    return(
        <section className="section">
            <form class="sign-in-form" method="POST">
                <h2>ავტორიზაცია <button>რეგისტრაცია</button></h2>
                <div class="sign-in-info">
                    <input type="text" name="username" id="username" placeholder="ტელეფონი / ელ.ფოსტა" /> 
                </div>
                <div class="sign-in-info">
                    <input type="password" name="password" id="password" placeholder="პაროლი" />
                </div>
                <div>
                    <input class="sign-in-submit" type="submit" value="შესვლა" />
                </div>
                    <input class="repassword" type="button" value="პაროლის აღდგენა" />
                    <button onClick={() => myseter(false)}>X</button>
            </form>
      </section>
    )
}