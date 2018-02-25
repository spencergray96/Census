import React, { Component } from 'react';
import '../../../style.css';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {

        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(data) {
        this.props.handlePageChange(data);
    }

    render() {
        return (
            <div id="landingPage">
                <div id="heroImageContainer">
                </div>
                <div id="callToAction" className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <div id="ctaMessage">
                        Start Making Data Now
                    </div>

                    <div id="loginButtonContainer">

                        <FacebookButton
                            handlePageChange = {this.handlePageChange}
                        />

                        <div id="loginButtonSeparator">
                            <div id="orMessage">
                                OR
                            </div>
                        </div>

                        <GoogleButton
                            handlePageChange = {this.handlePageChange}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;