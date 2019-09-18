import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import RestaurantsList from "./RestaurantsList";
import './App.css';
import NavigationBar from "./NavigationBar";

class Home extends React.Component{
    render() {
        return (
            <>
            <section className="container">
                <RestaurantsList />
                <Map />
            </section>
            </>
        )
    }
    
};

export default Home
            