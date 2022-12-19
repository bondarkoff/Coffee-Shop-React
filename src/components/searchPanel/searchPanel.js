import React, { Component } from 'react';

class SearchPanel extends Component {
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
            <div className="aboutFilter__search">
                <p className='aboutFilter__text'>Looking for
                <input type="text" 
                       className="aboutFilter__search-panel" 
                       placeholder="start typing here..." 
                       value={this.state.term} 
                       onChange={this.onUpdateSearch}/>
                </p>

            </div>
            // 
        );
    }
}

export default SearchPanel;