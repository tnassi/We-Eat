import React from 'react';
import {Menu} from '@wework-dev/dieter-ui';
import {MenuItem} from "semantic-ui-react";
import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            num: 0,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(newNum) {
        this.setState({num: newNum})
    };

    render() {
        const tabs = ["View Restaurants", "Create Restaurant", "Do Something Else"];
        const menuItems = tabs.map((tabname, i) => {
            return  (<MenuItem
                className={this.state.num === i ? "active": ""}
                onClick={() => this.onClick(i)}
                name={tabname}
            />);

        });

        return (
            <Menu pointing secondary>
                {menuItems}
            </Menu>
        )
    }
}

export default NavigationBar;
