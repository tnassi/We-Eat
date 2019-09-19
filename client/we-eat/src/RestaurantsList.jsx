import React from 'react';
import './RestaurantList.css';


class RestaurantsList extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants:[]
        }
    };

    componentDidMount(){
            fetch('http://localhost:3001/restaurants', {
                method: 'GET', 
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="restaurantlist"> {this.state.restaurants}</div>
        )
    }
}

export default RestaurantsList;