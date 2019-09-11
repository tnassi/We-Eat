import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import HeaderContent from "semantic-ui-react/dist/commonjs/elements/Header/HeaderContent";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

const cuisine_options = [
    { key: 'is', text: 'Israeli', value: 'israeli' },
    { key: 'it', text: 'Italian', value: 'italian' },
    { key: 'am', text: 'American', value: 'american' },
    { key: 'as', text: 'Asian', value: 'asian' },
    { key: 'su', text: 'Sushi', value: 'sushi' },
]

const star_rating_options = [
    {key: '1', text: '1 star', value: '1 star'},
    {key: '2', text: '2 stars', value: '2 stars'},
    {key: '3', text: '3 stars', value: '3 stars'},
]

const delivery_time_options = [
    {key: '30', text: '30 min', value: '30 min'},
    {key: '60', text: '1 hour', value: '1 hour'},
    {key: '90', text: '1.5 hours', value: '1.5 hours'},
    {key: '120', text: '2 hours', value: '2 hours'},
]

class CreateRestaurantForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div>
                <HeaderSubHeader size="huge">We Eat</HeaderSubHeader>
                <Form>
                    <Form.Input fluid label='Restaurant Name' />
                    <Form.Select  fluid  label='Cuisine'  options={cuisine_options}  />
                    <Form.Select  fluid  label='Rating'  options={star_rating_options}  />
                    <label>Accepts 10Bis</label>
                    <Form.Radio  name="acceptstenbis"  label='Yes'  value='yes'  defaultChecked  onChange={this.handleChange}/>
                    <Form.Radio  name="acceptstenbis"  label='No'  value='no'  onChange={this.handleChange}/>
                    <Form.Select fluid label='Delivery Time' options={delivery_time_options} />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default CreateRestaurantForm
