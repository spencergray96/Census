import React, { Component } from 'react';
import StatsFromDB from './StatsFromDB';
import '../../../style.css';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchToBrowseParam: "switchToBrowse",
            selectedSurvey: this.props.selectedSurvey,
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(data) {
        this.props.handlePageChange(data);
    }

    render() {

        return (
            <div>
                <div id="heroImageContainer">
                </div>
                <div id="resultsPageDisplay" className="mainPageContent col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <div id="backToBrowsePageDiv">
                        <button onClick={()=>this.handlePageChange(this.state.switchToBrowseParam)} id="backToBrowsePageButton" className="btn btn-danger" dangerouslySetInnerHTML={{__html: "<< Browse"}}>

                        </button>
                    </div>
                    <div id="resultsPageTitleInfo">
                        <div
                            id="resultsPageTitle"
                            className="centeredText pageTitle"
                            // dangerouslySetInnerHTML={{__html: this.state.selectedSurvey.surveyName}}
                        >
                            Survey Results
                        </div>
                        <div
                            id="resultsPageDesc"
                            className="centeredText pageDesc"
                            dangerouslySetInnerHTML={{__html: "Thank you! Your answer to '" + this.state.selectedSurvey.surveyName + "' has been submitted! See how your answers compare to everyone else who has answered this survey below!"}}
                        >
                        </div>
                    </div>
                    <hr className="enhancedHR"/>

                    <div id="statsFromDbDiv" className="centeredText">
                        <StatsFromDB
                            selectedSurvey = {this.state.selectedSurvey}
                        />
                    </div>

                    <div id="socialTwitterAndYoutube">

                        <div id="twitterSharing">
                            <div id="twitterShareMsg">
                                Share these results with Twitter!
                            </div>
                            <div id="twitterShareButtonContainer">
                                <button>
                                    This button does nothing yet and is not styled correctly
                                </button>
                            </div>
                        </div>

                        <div id="youtubeVideoSectionContainer">
                            <div id="youtubeVideoMsg">
                                Based on your answer, here's a video you might like!
                            </div>
                            <div id="youtubeVideoDiv">
                                (insert video here via a sub component)
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Results;