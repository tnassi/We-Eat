import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import CreateRestaurantForm from "./CreateRestaurantForm.jsx";
import RestaurantsList from "./RestaurantsList";
import './App.css';
import NavigationBar from "./NavigationBar";

class App extends React.Component {


    render() {
        return (
            <>
                <div>
                    <Header />
                </div>
                <div>
                    <NavigationBar />
                </div>

                <section className="container">
                    <RestaurantsList />
                    <Map />
                </section>
            </>
        )
    }
}

export default App;