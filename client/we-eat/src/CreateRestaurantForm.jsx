import React from "react";
import "./CreateRestaurantForm.css";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  FormField,
  Header,
  Input,
  Modal
} from "@wework-dev/dieter-ui";
import { CheckboxProps, DropdownProps } from "semantic-ui-react";
import Emoji from './Emoji.jsx';

const cuisine_options = [
  { key: "is", text: "Israeli 🇮🇱", value: "israeli" },
  { key: "it", text: "Italian 🇮🇹", value: "italian" },
  { key: "am", text: "American 🇺🇸", value: "american" },
  { key: "as", text: "Asian 🇨🇳", value: "asian" },
  { key: "su", text: "Sushi 🇯🇵", value: "sushi" },
  { key: "mx", text: "Mexican 🇲🇽", value: "mexican"}
];

const star_rating_options = [
  { key: "1", text: "⭐", value: "1 star" },
  { key: "2", text: "⭐⭐", value: "2 stars" },
  { key: "3", text: "⭐⭐⭐", value: "3 stars" }
];

export const getRatingAsEmoji = (ratingKey) => {
  const result = star_rating_options.find(rating => {
    return rating.key == ratingKey;
  });
  return result && result.text;
};

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
          <Form>
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
            <Modal
              actions={[
                {
                  content: 'Done',
                  key: 'done',
                  positive: true
                }
              ]}
              centered
              closeOnDimmerClick
              closeOnDocumentClick={false}
              content="Restaurant has been created."
              dimmer
              eventPool="Modal"
              header="Success!"
              onActionClick={function noRefCheck(){}}
              onClose={function noRefCheck(){}}
              onOpen={function noRefCheck(){}}
              trigger={<Button>Create</Button>}
            />
          </Form>
        </div>
      </>
    );
  }
}

export default CreateRestaurantForm;
