import React, { Component } from 'react';

class AboutItem extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="Item_1" />
                <div className="item__text" >
                    <h2>{this.props.item.name}</h2>
                    <p>{this.props.item.country}</p>
                    <p className='price'>{this.props.item.price}$</p>
                </div>
            </div>
            
        );
    }
}

export default AboutItem;