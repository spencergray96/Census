import React, { Component } from 'react';
import '../../../style.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchToBrowseParam: "switchToBrowse",
            switchToResultsParam: "switchToResults",
            selectedSurvey: this.props.selectedSurvey,
            selectedAnswer: null
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    handlePageChange(data) {
        this.props.handlePageChange(data);
    }

    submitAnswer(data) {
        this.setState({
            selectedAnswer: data
        }, ()=> {
            this.handlePageChange(this.state.switchToResultsParam);
        });
    }

    render() {

        let answerList;
        let currentAnswers = this.state.selectedSurvey.answers;

        answerList = currentAnswers.map((obj, i)=>{
            return (
                <div
                    key={"answerListItemContainer" + i}
                    className="answerListItemContainer col-lg-12 col-md-12 col-sm-12 col-xs-12"
                >
                    <button
                        key={"answerListItem" + i}
                        className="answerListItem transparent_btn_black"
                        dangerouslySetInnerHTML={{__html: currentAnswers[i].answer}}
                        onClick={()=>this.submitAnswer(currentAnswers[i].answer)}
                    >

                    </button>
                </div>
            )
        });

        return (
            <div>
                <div id="heroImageContainer">
                </div>
                <div id="answerPageDisplay" ref="answerPageDisplay" className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <div id="backToBrowsePageDiv">
                        <button onClick={()=>this.handlePageChange(this.state.switchToBrowseParam)} id="backToBrowsePageButton" className="btn btn-danger" dangerouslySetInnerHTML={{__html: "<< Browse"}}>

                        </button>
                    </div>
                    <div id="answerPageTitleInfo">
                        <div
                            id="answerPageTitle"
                            className="centeredText pageTitle"
                            dangerouslySetInnerHTML={{__html: this.state.selectedSurvey.surveyName}}>
                        </div>
                        <div
                            id="answerPageDesc"
                            className="centeredText pageDesc"
                            dangerouslySetInnerHTML={{__html: this.state.selectedSurvey.surveyDesc}}>
                        </div>
                    </div>
                    <hr className="enhancedHR"/>

                    {answerList}

                    <hr className="enhancedHR"/>

                </div>
            </div>
        );
    }
}

export default Answer;