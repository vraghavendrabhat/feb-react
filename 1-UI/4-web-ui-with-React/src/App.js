

import React, { Component } from 'react'
import Menu from './components/Menu'

export default class App extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-header">my hotel</div>
                <div className="card-body">
                    <Menu item={{ name: 'Biryani', price: 100, description: 'yummy' }} />
                    <Menu item={{ name: 'anna sambar', price: 50, description: 'too yummy' }} />
                </div>
            </div>
        )
    }
}
