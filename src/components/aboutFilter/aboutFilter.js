import React, { Component } from 'react'
import SearchPanel from '../searchPanel/searchPanel';
import './aboutFilter.scss'

class AboutFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'All',
                },
                {
                    key: 'Brazil',
                    name: 'Brazil',
                },
                {
                    key: 'Kenya',
                    name: 'Kenya',
                },
                {
                    key: 'Columbia',
                    name: 'Columbia',
                },
            ],
            term: ''
        }
    }


    onUpdateSearch = (term) => {
        this.setState({term})
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    render() {
        return (
            <div className="aboutFilter">
                <div className="container">
                    <div className="aboutFilter__wrapper">
                        <div className="aboutFilter__filter">
                            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                            {this.state.categories.map(el => (
                                <button className="aboutFilter__button" type="button" key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutFilter;