import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

class Header extends Component {
    render() {
        return (
            <div id="headerNavigation">
                <div id="headerNavInner" className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <div id="logoContainer">
                        <img id="headerNavLogo" src={require("../../assets/DTMC_logo.png")} alt="DTMC-logo"/>
                        <div id="logoTitle">Does That Make Census?</div>
                        <div id="logoTitleSmall">DTMC?</div>
                    </div>

                    <div id="navMenu">

                        <div className="navMenuItem">
                            <div className="navMenuText">
                                Item 1
                            </div>
                            <div className="navMenuDecoration">

                            </div>
                        </div>

                        <div className="navMenuItem">
                            <div className="navMenuText">
                                Hi Dov
                            </div>
                            <div className="navMenuDecoration">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;