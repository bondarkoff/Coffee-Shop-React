import React, { Component } from 'react';

import AboutItem from '../aboutItem/aboutItem'
import './aboutItems.scss';

class AboutItems extends Component {
    render() {
        return (
            <div className='aboutItems'>
                {this.props.items.map(el => (
                    <AboutItem onShowItem={this.props.onShowItem} key={el.id} item={el}/>
                ))}
            </div>
        );
    }
}

export default AboutItems;