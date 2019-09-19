import React from "react";
import "./RestaurantList.css";
import { List, ListItem, ListContent, ListHeader, ListDescription } from "semantic-ui-react";
import { Avatar } from '@wework-dev/dieter-ui';


class RestaurantsList extends React.Component {
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
      <div className="restaurantlist">
        {" "}
        {this.state.restaurants.map(restaurant => (
          <List key={restaurant.id}>
            
            <ListItem>
              <Avatar src="https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png" />
              <ListContent>
                <ListHeader>{restaurant.name}</ListHeader>
                <ListDescription>
                  {restaurant.cuisine}
                </ListDescription>
              </ListContent>
            </ListItem>
            </List>
        ))}
      </div>
    );
  }
}

export default RestaurantsList;
