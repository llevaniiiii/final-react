import style from './shopbutton.css';

export default function Shopbutton({myshopseter}) {
    return (
        <section className='section'>
            <div className='wrapper'>
                <p>პროდუქტი დამატებულია კალათაში</p>
                <button onClick={() => myshopseter(false)}>გაგრძელება</button>
                <button>კალათის ნახვა</button>
            </div>
        </section>
    )
}