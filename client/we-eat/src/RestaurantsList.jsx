import React from "react";
import "./RestaurantList.css";
import { List, ListItem, ListContent, ListHeader, ListDescription } from "semantic-ui-react";
import { Avatar } from '@wework-dev/dieter-ui';
import { getRatingAsEmoji } from './CreateRestaurantForm.jsx'


class RestaurantsList extends React.Component {

  render() {
    return (
      <div className="restaurantlist">
        {" "}
        {this.props.restaurants.map(restaurant => (
          <List key={restaurant.id}>
            
            <ListItem>
              <Avatar className="" />
              <ListContent>
                <ListHeader>{restaurant.name}</ListHeader>
                <ListDescription>
                  {restaurant.cuisine}{getRatingAsEmoji(restaurant.rating)}
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
