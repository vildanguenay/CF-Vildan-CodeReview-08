import React, {Component} from 'react';
import './buy.css';
import house from "./house.jpg";

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
                <p>{property.name}</p>
                <p>{property.description}</p>
                <div className="figure">{property.price}</div>
              </div>
            ))}
          </div>
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