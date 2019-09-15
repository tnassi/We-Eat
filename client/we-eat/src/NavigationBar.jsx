import React from 'react';
import {Menu} from '@wework-dev/dieter-ui';
import {MenuItem} from "semantic-ui-react";

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state= { clicked: true };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({clicked: !this.state.clicked})
    };

    render() {

        let selectedTab;
        if (this.state.clicked) {
            selectedTab = "clicked";
        } else {
            selectedTab = "notClicked";
        }

        console.log("testing", selectedTab);

        return (
            <div>
                <Menu pointing secondary>
                    <MenuItem onClick={this.onClick} name="View Restaurants" />
                    <MenuItem active={false} name="Create Restaurant" />
                    <MenuItem name="Do Something Else" />
                </Menu>
            </div>
        )
    }
}

export default NavigationBar;