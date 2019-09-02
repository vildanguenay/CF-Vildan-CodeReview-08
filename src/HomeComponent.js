import React, {Component} from "react";
import "./home.css";
import ButtonComponent from './ButtonComponent';
import house from "./house.jpg";

class HomeComponent extends Component {
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
              <p>{property.name}</p>
              <p>{property.description}</p>
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
  },
  {
    image: "./house.jpg",
    name: "Cottage",
    description: "2 kitchens, 2 bedrooms, 2 bathrooms",
    price: "$2500"
  },
  {
    image: "./house.jpg",
    name: "Modern Villa",
    description: "4 kitchens, 2 bedrooms, 4 bathrooms",
    price: "$8500"
  },
  {
    image: "./house.jpg",
    name: "Farmhouse",
    description: "2 kitchens, 2 bedrooms, 2 bathrooms",
    price: "$6500"
  },
  {
    image: "./house.jpg",
    name: "Rustical House",
    description: "2 kitchens, 2 bedrooms, 2 bathrooms",
    price: "$6500"
  },
  {
    image: "./house.jpg",
    name: "Futuristic Mansion",
    description: "5 kitchens, 2 bedrooms, 12 bathrooms",
    price: "$2500"
  }
];

export default HomeComponent;
