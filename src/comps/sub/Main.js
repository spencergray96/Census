import React, { Component } from 'react';
import LandingPage from './pages/landing/LandingPage';
import Browse from './pages/browse/Browse';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            signedIn: false,
            currentPage: "landing"
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(data) {
        var changeToThis;

        switch(data){
            case "switchToBrowse":
                changeToThis = "browse";
                break;
            default:
                changeToThis = "landing";
                break;
        }

        this.setState({
            currentPage: changeToThis
        });
    }

    render() {

        var comp;

        switch(this.state.currentPage) {
            case "landing":
                comp = <LandingPage
                    handlePageChange = {this.handlePageChange}
                />
                break;
            case "browse":
                comp = <Browse
                    handlePageChange = {this.handlePageChange}
                />
                break;
        }

        return (
            <div>
                {comp}
            </div>
        );
    }
}

export default Main;