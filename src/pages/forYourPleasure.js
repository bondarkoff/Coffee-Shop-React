import React, { Component } from 'react';
import PleasureAbout from '../components/pleasureAbout/pleasureAbout';
import PleasureMain from '../components/pleasureMain/pleasureMain';

class ForYourPleasure extends Component {
    render() {
        return (
            <div>
                <PleasureMain/>
                <PleasureAbout/>
            </div>
        );
    }
}

export default ForYourPleasure;