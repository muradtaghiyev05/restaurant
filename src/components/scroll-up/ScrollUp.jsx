import { Link } from 'react-router-dom';
import UpArrow from '../../assets/other-images/up-arrow.svg'

const ScrollUp = () => {

    window.addEventListener('scroll', () => {
        const scrollUp = document.querySelector('.scrollup');
        if ( window.scrollY >= 560) {
            return scrollUp.classList.add('show-scroll')
        }
        else {
            return scrollUp.classList.remove('show-scroll')
        }
    })

  return (
    <Link to='#' className='scrollup'>
        <img src={UpArrow} alt='up' className='scrollup-icon' />
    </Link>
  )
}

export default ScrollUp