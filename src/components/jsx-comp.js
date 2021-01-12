import * as React from 'react';

const { Component, Children } = React;
console.log('Children....', Children);

function Comp1 () {
    return (
        <div style={{color: 'red'}}>
            comp 1
        </div>
    );
}

export { Comp1 };

class Comp2 extends Component {
    render () {
        return (
            <div style={{color: 'red'}}>
                class comp 2
            </div>
        );
    }
}

export { Comp2 };


class List extends Component {
    handleClick = () => {
        window.alert('hh');
    }

    render () {
        const list = Children.toArray(this.props.children);
        return (
            <ul>
                {this.props.children.map(item => <div style={{color: 'green'}} onClick={this.handleClick}>{item} {item}</div>)}
            </ul>
        )
    }
}

class Item extends Component {
    render () {
        return <li>{this.props.children}</li>
    }
}

class Comp3 extends Component {
    render () {
        return (
            <List>
                <Item>1</Item>
                <Item>11</Item>
                <Item>111</Item>
                <Item>1111</Item>
                <Item>11111</Item>
                <Item>111111</Item>
            </List>
        )
    }
}

export { Comp3 };