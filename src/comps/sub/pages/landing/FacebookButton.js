import React, { Component } from 'react';
import '../../../style.css';

window.fbAsyncInit = function() {
    window.FB.init({
      appId            : '430681940677935',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



class FacebookButton extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            fbName:"",
            fbPic:"",
        }

        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleFacebookLogin() {
        console.log(window.FB);
        
        window.FB.login((resp)=>{
            console.log(resp);
            
            if(resp.status === "connected"){
                var token = resp.authResponse.accessToken;
                
                //fetch user's info
                fetch("https://graph.facebook.com/me?fields=age_range,name,picture.height(500)&access_token="+token).then((resp)=>{
                    return resp.json();
                }).then((json)=>{
                    console.log(json);
                    
                    this.setState({
                        fbName:json.name,
                        fbPic:json.picture.data.url
                    })
                });
            }
        });
    }

    handlePageChange() {
        this.props.handlePageChange("switchToBrowse");
    }

    render() {
        
        if(this.state.fbName !== ""){
            this.handlePageChange();
        }
        
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