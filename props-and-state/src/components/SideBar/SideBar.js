import React, {Component} from 'react';
import './SideBar.css'


class SideBar extends Component {
    render() {
        let menuItems = ['Home', "About", 'Articles', 'More']
        return (
            <div className="menu-container">
                <h1>Nav Menu</h1>
                <ul>
                    {menuItems.map((menuItem) => {
                        return (
                            <li key={menuItem} onClick={() => alert(`You clicked ${menuItem}!`)}>{menuItem}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SideBar;
