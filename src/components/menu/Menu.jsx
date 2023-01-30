import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { categories, dishes } from "../../menu/data"
import DishCard from "../dish-card/DishCard"

const Menu = () => {

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [pathname, hash, key]);

  return (
    <div className="menu">
      <h1>Menyu</h1>
      <div className="category-links">
        {categories.map(item => (
          <Link to={`#${item.id}`} key={item.id}>
            <div className='category-link'>
              <div className="link-img">
                <img src={item.img} alt="category" />
              </div>
              <span className="category-link-span">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="menu-container">
        {categories.map(item => (
          <div key={item.id} className="category-container" id={`${item.id}`}>
            <div className="menu-title">
              <div className="img-container">
                <img src={item.img} alt="category" />
              </div>
              <h2>{item.title}</h2>
            </div>
            <div className='dish-container'>
              {dishes.filter(dish => dish.type === item.title).map(dish => (
                <DishCard key={dish.id} item={dish} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Menu