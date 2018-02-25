import React, { Component } from 'react';
import '../../../style.css';

class GoogleButton extends Component {
    constructor(){
        super();

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleGoogleLogin() {
        console.log("clicked google login; awaiting API implementation!!");
        this.handlePageChange();
    }

    handlePageChange() {
        this.props.handlePageChange("switchToBrowse");
    }

    render() {
        return (
            <div
                id="loginWithGoogleButton"
                className="transparent_btn loginButton text-center"
                onClick={this.handleGoogleLogin}
            >
                Login with Google
            </div>
        );
    }
}

export default GoogleButton;