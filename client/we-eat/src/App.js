import React from "react";
import Header from "./Header.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateRestaurantForm from "./CreateRestaurantForm.jsx";
import RestaurantsList from "./RestaurantsList";
import "./App.css";
import NavigationBar from "./NavigationBar";
import Home from "./Home";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <Header />
          </div>
          <div>
            <NavigationBar />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateRestaurantForm} />
        </Router>
      </>
    );
  }
}

export default App;
