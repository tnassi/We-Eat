import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { getRatingAsEmoji } from "./CreateRestaurantForm.jsx";
import "./RestaurantCard.css";

class RestaurantCard extends React.Component {


  render() {
    console.log("Restaurant:" + JSON.stringify(this.props.restaurants[0]));
    return (
      <div className="container">
        {this.props.restaurants.map(restaurant => (
          <Card key={restaurant.id}>
            <Image
              src={restaurant.image_url}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{restaurant.name}</Card.Header>
              <Card.Meta>
                <span>
                  {restaurant.cuisine}
                  {getRatingAsEmoji(restaurant.rating)}
                </span>
              </Card.Meta>
              <Card.Description>
                {`Maximum Delivery Time: ${restaurant.maximum_delivery_time} hour`}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div>
                <a>
                  <Button basic color="green">
                    Write a Review
                  </Button>
                </a>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  }
}

export default RestaurantCard;
