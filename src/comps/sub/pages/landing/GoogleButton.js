import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import '../../../style.css';

class GoogleButton extends Component {
    constructor(){
        super();

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    handleGoogleLogin() {
        console.log("clicked google login; awaiting API implementation!!");
        this.handlePageChange();
    }

    handlePageChange() {
        this.props.handlePageChange("switchToBrowse");
    }
    
    responseGoogle (googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var googleId = googleUser.getId()
        console.log({ googleId });
        console.log({accessToken: id_token});
    }

    render() {
        return (
            <div
                id="loginWithGoogleButton"
            >
                <GoogleLogin socialId="719562683996-0ah1qkts0ajdt246hp95t14n96f1l35r.apps.googleusercontent.com"
                     className="transparent_btn loginButton text-center"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
               
            </div>
        );
    }
}

export default GoogleButton;