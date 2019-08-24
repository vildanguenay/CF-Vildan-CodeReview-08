import React, {Component} from 'react';
import './rent.css';
import house from "./house.jpg";
import RentChild1 from './RentChild1';
import RentChild2 from './RentChild2';
import RentChild3 from './RentChild3';
import ButtonComponent from './ButtonComponent';

class RentComponent extends Component {
    render() {
      return (
        <main>
          <div id="wrapper">
            {properties.map(property => (
              <div className="cardImage">
                <div>
                  <img src={house} width="150px" />
                </div>
                <RentChild1 name={property.name}/>
                <RentChild2 description={property.description}/>
                <RentChild3 price={property.price}/>
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
      name: "Roma Villa",
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

export default RentComponent;