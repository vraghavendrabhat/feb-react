import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class ActionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        console.log("ActionBox::render()");
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Action Box : <span className="badge badge-danger">{totalCount}</span></div>
                <div className="card-body">

                    <ActionButton value={1} onAction={e => this.incrementTotalCount()} />
                    <ActionButton value={10} onAction={e => this.incrementTotalCount()} />
                    <ActionButton value={-1} onAction={e => this.incrementTotalCount()} />
                    <ActionButton value={-10} onAction={e => this.incrementTotalCount()} />

                    <div style={{ clear: 'both' }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>

                </div>
            </div>
        );
    }
}

export default ActionBox;