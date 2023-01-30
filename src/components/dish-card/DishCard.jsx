import { useDispatch } from 'react-redux';
import AddIcon from '../../assets/other-images/add-to-cart.svg';
import { addProduct } from "../../redux/cartRedux";

const DishCard = ({ item }) => {

  const dispatch = useDispatch();

  // for adding product to redux
  const handleClick = (item) => {
    dispatch(addProduct({
      id: item.id,
      title: item.title,
      quantity: 1,
      price: item.price,
      message: `${item.title} səbətə əlavə olundu!`
    }));
  };

  return (
    <>
      <div className="dish-card-container">
        <div className='dish-card'>
          <div className="entry">
            <div className="dish-title">
              {item.title}
            </div>
            <div className="dish-price">
              {item.price}
            </div>
          </div>
        </div>
        <button className='add-btn' onClick={() => handleClick(item)}>
          <img src={AddIcon} alt='add' />
        </button>
      </div>
    </>
  )
}


export default DishCard;