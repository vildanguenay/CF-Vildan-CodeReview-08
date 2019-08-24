import React, {Component} from 'react';
import './sell.css';
import house from "./house.jpg";
import ButtonComponent from './ButtonComponent';
import SellChild1 from './SellChild1';
import SellChild2 from './SellChild2';

class SellComponent extends Component {
    render() {
      return (
        <main>
          <div id="wrapper">
            {properties.map(property => (
              <div className="cardImage">
                <div>
                  <img src={house} width="150px" />
                </div>
                <SellChild1 name={property.name}/>
                <SellChild2 description={property.description}/>
                <div className="figure">{property.price}</div>
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
      name: "Valencia Villa",
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

export default SellComponent;