import React from "react";
import Header from "./Header.jsx";
import RestaurantsList from "./RestaurantsList";
import "./App.css";
import NavigationBar from "./NavigationBar";
import RestaurantCard from "./RestaurantCard";

class Home extends React.Component {

constructor() {
    super();
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/restaurants", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log("Success:", JSON.stringify(response));
        return response;
      })
      .then(res => {
        this.setState({
          restaurants: res
        });
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <>
        <section className="container">
          <RestaurantCard restaurants={this.state.restaurants} />
        </section>
      </>
    );
  }
}

export default Home;
