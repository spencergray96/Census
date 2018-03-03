import React, { Component } from 'react';
import SurveyList from './SurveyList';
import '../../../style.css';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSurvey: this.props.selectedSurvey,
            alreadyAnswered: false
        };

        this.handleSurveyChange = this.handleSurveyChange.bind(this);
    }

    handleSurveyChange(data) {
        this.props.handleSurveyChange(data);

        //insert check if they have already answered this survey here

        if(!this.state.alreadyAnswered) {
            this.props.handlePageChange("switchToAnswer");
        } else {
            this.props.handlePageChange("switchToResults");
        }
    }

    render() {
        return (
            <div>
                <div id="heroImageContainer">
                </div>
                <div id="surveyListDisplay" className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <div id="browsePageTitle" className="pageTitle">
                        Browse Surveys
                    </div>
                    <hr className="enhancedHR"/>

                    <SurveyList
                        selectedSurvey = {this.state.selectedSurvey}
                        handleSurveyChange = {this.handleSurveyChange}
                    />
                </div>

            </div>
        );
    }
}

export default Browse;