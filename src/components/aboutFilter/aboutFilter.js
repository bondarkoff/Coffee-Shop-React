import React, { Component } from 'react';
import './aboutFilter.scss'

class AboutFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="aboutFilter">
                <div className="container">
                    <div className="aboutFilter__wrapper">
                        <div className="aboutFilter__search">
                            <p className='aboutFilter__text'>Looking for</p><input type="text" className="aboutFilter__search-panel" placeholder="start typing here..."
                            value={this.state.term} onChange={this.onUpdateSearch}/>
                        </div>
                        <div className="aboutFilter__filter">
                            <p className='aboutFilter__text'>Or Filter</p>
                            <button className="aboutFilter__button">Brazil</button>
                            <button className="aboutFilter__button">Kenya</button>
                            <button className="aboutFilter__button">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutFilter;