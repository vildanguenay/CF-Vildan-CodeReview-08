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
            {/* loop through array and then call function for each property */}
            {properties.map(property => (
              <div className="cardImage">
                <div>
                  <img src={house} width="150px" />
                </div>
                {/* display child + pass props */}
                
                <RentChild1 name={property.name} address="Kreuzfeldgasse"/>
                {console.log(property.name)}
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
      // property 1
      image: house,
      name: "Roma Villa",
      description: "2 kitchens, 2 bedrooms, 2 bathrooms",
      price: "$55500"
    },
    {
       // property 2
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