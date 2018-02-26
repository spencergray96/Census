import React, { Component } from 'react';
import '../../../style.css';

class Answer extends Component {
    constructor() {
        super();

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange() {
        this.props.handlePageChange("switchToBrowse");
    }

    render() {
        return (
            <div>
                <div id="heroImageContainer">
                </div>
                <div id="answerPageDisplay" className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <div id="backToBrowsePageDiv">
                        <button onClick={this.handlePageChange} id="backToBrowsePageButton" className="btn btn-danger"dangerouslySetInnerHTML={{__html: "<< Browse"}}>

                        </button>
                    </div>
                    <div id="answerPageTitleInfo">
                        <div id="answerPageTitle" className="centeredText pageTitle">
                            title
                        </div>
                        <div id="answerPageDesc" className="centeredText">
                            desc
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Answer;