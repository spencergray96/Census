import React, { Component } from 'react';
import '../../../style.css';

class FacebookButton extends Component {
    constructor(){
        super();

        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleFacebookLogin() {
        console.log("clicked facebook login; awaiting API implementation!!");
        this.handlePageChange();
    }

    handlePageChange() {
        this.props.handlePageChange("switchToBrowse");
    }

    render() {
        return (
            <div
                id="loginWithFacebookButton"
                className="transparent_btn loginButton text-center"
                onClick={this.handleFacebookLogin}
            >
                Login with Facebook
            </div>
        );
    }
}

export default FacebookButton;