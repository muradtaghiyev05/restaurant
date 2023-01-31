import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BannerImg from '../../assets/other-images/home-banner.webp';
import CategoriesSlider from "../categories-slider/CategoriesSlider";

const Home = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return (
    <div className='home'>
        <div className='hero-container'>
            <img src={BannerImg} alt='hero' />
            <div className="hero-info">
                <h2>Önəmli olan yeməyin dadı deyil,<br />onu kiminlə paylaşdığınızdır.</h2>
                <div className="btns-container">
                    <Link to={`/menu`}><button className="hero-btn">Menyu</button></Link>
                    <Link to={`/reservation`}><button className="hero-btn">Rezervasiya</button></Link>
                </div>
            </div>
        </div>
        <div className="categories-slider-container">
            <h2>Mətbəximiz</h2>
            <CategoriesSlider />
        </div>
    </div>
    )
}

export default Home