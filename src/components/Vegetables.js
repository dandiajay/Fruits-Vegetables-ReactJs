import Header from './Header';
import { useStateValue } from './StateProvider';
import { useRef, useState } from 'react';
import ladiesfinger from '../assets/Images/ladiesfinger.jpg';
import onion from '../assets/Images/onion.png';
import potato from '../assets/Images/potato.png';
import tomato from '../assets/Images/tomato.png';
import radish from '../assets/Images/radish.png';
import cabbage from '../assets/Images/cabbage.png';
import capsicum from '../assets/Images/capsicum.png';
import cauliflower from '../assets/Images/cauliflower.jpg';
import garlic from '../assets/Images/garlic.png';
import ginger from '../assets/Images/ginger.png';
import lemon from '../assets/Images/lemon.png';
import carrot from "../assets/Images/carrot.png";

function Veg({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addingToBasket = useRef(false);

  const addVeg = () => {
    if (!addingToBasket.current) {
      addingToBasket.current = true;

      const existingItem = basket.find(item => item.id === id);

      if (existingItem) {
        const updatedBasket = basket.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        dispatch({
          type: "UPDATE_QUANTITY",
          basket: updatedBasket,
        });
      } else {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            quantity: 1,
          },
        });
      }

      setTimeout(() => {
        addingToBasket.current = false;
      }, 1000); // Reset the ref after 1 second
    }
  };
  return (
    <div className='d-flex flex-column bg-light ms-3 mt-4 text-center'>
      <h1>{title}</h1>
      <strong>Price ${price}</strong>
      <div className='d-flex flex-column align-items-center'>
        <img src={image} alt="Fruit" className='products-img img-fluid' style={{ height: "180px", width: "200px" }} />
        <button onClick={addVeg} className='btn bg-warning w-auto'>
          {addingToBasket.current ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

const Vegetable = () => {
  const [vegetables] = useState([
    {
      id: 11,
      image: ladiesfinger,
      title: 'ladiesFinger',
      price: 50,
    },
    {
      id: 12,
      image: potato,
      title: 'Potato',
      price: 50,
    },
    {
      id: 13,
      image: tomato,
      title: 'Tomato',
      price: 50,
    },
    {
      id: 14,
      image: radish,
      title: 'Radish',
      price: 50,
    },
    {
      id: 15,
      image: onion,
      title: 'onion',
      price: 50,
    },
    {
      id: 16,
      image: carrot,
      title: 'Carrot',
      price: 50,
    },
    {
      id: 17,
      image: cabbage,
      title: 'Cabbage',
      price: 50,
    },
    {
      id: 18,
      image: capsicum,
      title: 'Capsicum',
      price: 50,
    },
    {
      id: 19,
      image: cauliflower,
      title: 'Cauliflower',
      price: 50,
    },
    {
      id: 20,
      image: lemon,
      title: 'Lemon',
      price: 50,
    },
    {
      id: 21,
      image: garlic,
      title: 'Garlic',
      price: 50,
    },
    {
      id: 22,
      image: ginger,
      title: 'Ginger',
      price: 50,
    }
  ]);

  const [searchItem, setsearchItem] = useState('');

  const handleSearch = (event) => {
    setsearchItem(event.target.value);
  };

  const filteredVegetables = vegetables.filter((vegetable) =>
  vegetable.title.toLowerCase().includes(searchItem.toLowerCase())
);


  return (
    <>
     <Header handleSearch={handleSearch} />
      <div className='row row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-1 container-fluid w-100' style={{ marginTop: '100px' }}>
        {filteredVegetables.map((vegetable) => (
          <div key={vegetable.id} className='col'>
            <Veg
              id={vegetable.id}
              image={vegetable.image}
              title={vegetable.title}
              price={vegetable.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Vegetable;