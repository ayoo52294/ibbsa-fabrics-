import './card.css'
import imageLink1 from '../assets/pexels-kseniachernaya-3965543.jpg'
import imageLink2 from '../assets/pexels-kseniachernaya-3965557.jpg'
import imageLink3 from '../assets/pexels-maryiaplashchynskaya-3527572.jpg'

function Card() {
    return (

        <section className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="services-content">
                    <img src={imageLink1} alt='Lorem ipsum dolor sit amet.' />
                    <h3>Custom Designs</h3>
                    <p>Personalized outfits made to your measurements and style preferences.</p>
                </div>
                <div className="services-content">
                    <img src={imageLink2} alt='Lorem ipsum dolor sit amet.' />
                    <h3>Ready-to-Wear Collections</h3>
                    <p>Seasonal releases of stylish and comfortable garments for every mood.</p>
                </div>
                <div className="services-content">
                    <img src={imageLink3} alt='Lorem ipsum dolor sit amet.' />
                    <h3>Wardrobe Consultation</h3>
                    <p>Expert advice on how to elevate your look and redefine your fashion voice</p>
                </div>
            </div>
        </section>
    )
}

export default Card