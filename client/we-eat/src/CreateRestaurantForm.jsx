import React from "react";
import "./CreateRestaurantForm.css";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  FormField,
  Header,
  Input
} from "@wework-dev/dieter-ui";
import { CheckboxProps, DropdownProps } from "semantic-ui-react";

const cuisine_options = [
  { key: "is", text: "Israeli", value: "israeli" },
  { key: "it", text: "Italian", value: "italian" },
  { key: "am", text: "American", value: "american" },
  { key: "as", text: "Asian", value: "asian" },
  { key: "su", text: "Sushi", value: "sushi" }
];

const star_rating_options = [
  { key: "1", text: "1 star", value: "1 star" },
  { key: "2", text: "2 stars", value: "2 stars" },
  { key: "3", text: "3 stars", value: "3 stars" }
];

const delivery_time_options = [
  { key: "30", text: "30 min", value: "30 min" },
  { key: "60", text: "1 hour", value: "1 hour" },
  { key: "90", text: "1.5 hours", value: "1.5 hours" },
  { key: "120", text: "2 hours", value: "2 hours" }
];

const Select = (props: DropdownProps) => <Dropdown {...props} selection />;
const Radio = (props: CheckboxProps) => <Checkbox {...props} radio />;

class CreateRestaurantForm extends React.Component {
  state = { value: "yes" };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <div className="formcontainer">
          <Form onSubmit={() => alert("Your Restaurant has been created")}>
            <FormField
              className="formtext"
              control={Input}
              defaultValue="Foo"
              label="Restaurant Name"
              outline
            />
            <FormField
              className="formtext"
              control={Select}
              fluid
              label="Cuisine"
              options={cuisine_options}
            />
            <FormField
              className="formtext"
              control={Select}
              fluid
              label="Rating"
              options={star_rating_options}
            />
            <FormField
              label="Accepts 10Bis"
              control={() => (
                <>
                  <Radio
                    name="acceptstenbis"
                    label="Yes"
                    value="yes"
                    checked={value === "yes"}
                    onChange={this.handleChange}
                  />
                  <Radio
                    name="acceptstenbis"
                    label="No"
                    value="no"
                    checked={value === "no"}
                    onChange={this.handleChange}
                  />
                </>
              )}
            />
            <FormField
              control={Select}
              fluid
              label="Delivery Time"
              options={delivery_time_options}
            />
            <Button className="formbutton" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default CreateRestaurantForm;
