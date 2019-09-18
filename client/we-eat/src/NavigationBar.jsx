import React from 'react';
import { Menu } from '@wework-dev/dieter-ui';
import { Link } from 'react-router-dom';
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
        const tabs = [{ name: "View Restaurants", link: '/' }, { name: "Create Restaurant", link: '/create'}, { name:  "Do Something Else", link: '/unknown'}];
        const menuItems = tabs.map((tab, index) => {
            return  (<Menu.Item
                onClick={this.handleClick(index)}
                active={this.state.activeTab === index}
                name={tab.name}
            >
                <Link to={tab.link}>{tab.name}</Link>  
            </Menu.Item>);

        });

        return (
            <Menu pointing secondary>
                {menuItems}
            </Menu>
        )
    }
}

export default NavigationBar;
