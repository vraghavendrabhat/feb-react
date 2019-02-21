
import React, { Component } from 'react'


class Menu extends Component {

    render() {
        let { item } = this.props;
        return (
            <div className="alert alert-info">
                {item.name} &mdash; <span>&#8377;{item.price}</span>
                <hr />
                <p>{item.description}</p>
            </div>
        )
    }

}

export default Menu;