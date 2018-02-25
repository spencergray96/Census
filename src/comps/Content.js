import React, { Component } from 'react';
import Header from './sub/Header';
import Main from './sub/Main';

class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default Content;