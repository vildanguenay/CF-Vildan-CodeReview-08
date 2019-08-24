import React, {Component} from 'react';
import './buy.css';
import house from "./house.jpg";
import BuyChild1 from './BuyChild1';
import BuyChild2 from './BuyChild2';
import BuyChild3 from './BuyChild3';
import ButtonComponent from './ButtonComponent';

class BuyComponent extends Component {
    render() {
      return (
        <main>
          <div id="wrapper">
            {properties.map(property => (
              <div className="cardImage">
                <div>
                  <img src={house} width="150px" />
                </div>
                <BuyChild1 name={property.name}/> 
                <BuyChild2 description={property.description}/>
                <BuyChild3 price={property.price}/>
              </div>
            ))}
          </div>
          <ButtonComponent/>
        </main>
      );
    }
  }
  
  const properties = [
    {
      image: house,
      name: "Barcelona Villa",
      description: "2 kitchens, 2 bedrooms, 2 bathrooms",
      price: "$55500"
    },
    {
      image: "./house.jpg",
      name: "Flower House",
      description: "2 kitchens, 2 bedrooms, 2 bathrooms",
      price: "$20500"
    },
    {
      image: "./house.jpg",
      name: "Bungalow",
      description: "2 kitchens, 2 bedrooms, 2 bathrooms",
      price: "$44500"
    },
    {
      image: "./house.jpg",
      name: "Industrial Mansion",
      description: "2 kitchens, 2 bedrooms, 2 bathrooms",
      price: "$2500"
    }
];

export default BuyComponent;