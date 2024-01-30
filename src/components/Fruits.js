import Header from './Header';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import React, { useRef } from "react";
import apple from '../assets/Images/Apple-Fruit.png'
import mango from '../assets/Images/Mango-1.png';
import banana from '../assets/Images/banana.png';
import pear from '../assets/Images/pear.png';
import pineapple from '../assets/Images/pineapple.png';
import grapes from '../assets/Images/grapes.png'
import orange from '../assets/Images/orange.png';
import kiwi from '../assets/Images/kiwi.png';
import watermilon from '../assets/Images/watermilon.png';
import custard from '../assets/Images/custard.png'
import guava from '../assets/Images/guava.png';
import pomegranate from "../assets/Images/pomegranate.png"

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addingToBasket = useRef(false);

  const addProduct = () => {
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
      <h1 className='fruit-title'>{title}</h1>
      <div className='d-flex flex-column align-items-center'>
        <img src={image} alt="Fruit" className='fruits-img img-fluid' style={{ height: "180px", width: "200px" }} />
        <strong>1 kg ${price}</strong>
        <button onClick={addProduct} className='btn bg-warning w-auto m-2'>
          {addingToBasket.current ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

const Fruits = () => {
  const [fruits] = useState([
    {
      id: 1,
      image: apple,
      title: 'apple',
      price: 50,
    },
    {
      id: 22,
      image: orange,
      title: 'orange',
      price: 40,
    },
    {
      id: 3,
      image: pineapple,
      title: 'pineApple',
      price: 60,
    },
    {
      id: 4,
      image: mango,
      title: 'mango',
      price: 60,
    },
    {
      id: 5,
      image: pear,
      title: 'pear',
      price: 60,
    },
    {
      id: 6,
      image: pomegranate,
      title: 'pomegranate',
      price: 60,
    },
    {
      id: 7,
      image: kiwi,
      title: 'kiwi',
      price: 60,
    },
    {
      id: 8,
      image: banana,
      title: 'banana',
      price: 60,
    },
    {
      id: 9,
      image: grapes,
      title: 'grapes',
      price: 60,
    },
    {
      id: 10,
      image: guava,
      title: 'guava',
      price: 60,
    },
    {
      id: 11,
      image: custard,
      title: 'custard',
      price: 60,
    },
    {
      id: 2,
      image: watermilon,
      title: 'watermilion',
      price: 60,
    },

  ]);

  const [searchItem, setsearchItem] = useState('');

  const handleSearch = (event) => {
    setsearchItem(event.target.value);
  };

  const filteredFruits = fruits.filter((fruit) =>
  fruit.title.toLowerCase().includes(searchItem.toLowerCase())
);


  return (
    <>
     <Header handleSearch={handleSearch} />
      <div className='row row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-1 container-fluid w-100' style={{ marginTop: '100px' }}>
        {filteredFruits.map((fruit) => (
          <div key={fruit.id} className='col'>
            <Product
              id={fruit.id}
              image={fruit.image}
              title={fruit.title}
              price={fruit.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Fruits;