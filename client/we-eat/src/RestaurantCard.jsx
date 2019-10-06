import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { getRatingAsEmoji } from "./CreateRestaurantForm.jsx";
import "./RestaurantCard.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxVwuYJzCio9VvR_L6oQ7HPhmq_5KvOW3MapcmT-VtGnQHEgjA",
  "https://www.pressurecookingtoday.com/wp-content/uploads/2018/12/Pressure-Cooker-Penne-and-Quick-Marinara-Sauce-Pressure-Cooking-Today-720x720.jpg",
  "https://natashaskitchen.com/wp-content/uploads/2019/02/Greek-Salad.jpg"
];

class RestaurantCard extends React.Component {


  render() {
    console.log("Restaurant:" + JSON.stringify(this.props.restaurants[0]));
    return (
      <div className="container">
        {this.props.restaurants.map(restaurant => (
          <Card key={restaurant.id}>
            <Image
              src={images[1]}
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
