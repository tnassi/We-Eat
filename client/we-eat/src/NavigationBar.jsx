import React from 'react';
import {Menu} from '@wework-dev/dieter-ui';
import {MenuItem} from "semantic-ui-react";
import './NavigationBar.css';

class NavigationBar extends React.Component {
    state = {
        activeTab: 0
    };

    handleClick = (index) => () => {
        this.setState({activeTab : index})
    }

    onClick(newNum) {
        this.setState({num: newNum})
    };

    render() {
        const tabs = ["View Restaurants", "Create Restaurant", "Do Something Else"];
        const menuItems = tabs.map((tabname, index) => {
            return  (<MenuItem
                onClick={this.handleClick(index)}
                active={this.state.activeTab === index}
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
