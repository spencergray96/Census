import React, { Component } from 'react';
import '../../../style.css';

class StatsFromDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSurvey: this.props.selectedSurvey,
            selectedSurveyResults: this.props.selectedSurvey.answers,
            // sortedSurveyResults: this.state.selectedSurveyResults.sort(this.sortSurveyAnswers)
        };

        this.sortSurveyAnswers = this.sortSurveyAnswers.bind(this);
    }

    componentDidMount() {
        let test = this.state.selectedSurveyResults.sort(this.sortSurveyAnswers);
        console.log(test);
    }

    sortSurveyAnswers(a, b) {
        if (a.votes > b.votes)
            return -1;
        if (a.votes <= b.votes)
            return 1;
        return 0;
    }

    handlePageChange(data) {
        this.props.handlePageChange(data);
    }

    render() {

        let resultsList;
        let sortedResults = this.state.selectedSurveyResults.sort(this.sortSurveyAnswers);
        let totalVotes = 0;
        for(let i = 0; i < sortedResults.length; i++){
            totalVotes += sortedResults[i].votes;
        }

        resultsList = sortedResults.map((obj, i)=>{
            let answerRank = i + 1;
            let answerPercent = Math.round((sortedResults[i].votes / totalVotes) * 100);
            return (
                <div
                    key={"result" + i}
                    className="resultItem"
                    dangerouslySetInnerHTML={{__html: answerRank + ". " + sortedResults[i].answer + " - (" + answerPercent + "%)"}}
                >
                </div>
            )
        });

        return (
            <div>
                <div id="totalVotesDisplayDiv"
                     dangerouslySetInnerHTML={{__html: "'" + this.state.selectedSurvey.surveyName + "' has " + totalVotes + " votes so far."}}
                >
                </div>
                <div id="resultsListDisplayDiv">
                    {resultsList}
                </div>
            </div>
        );
    }
}

export default StatsFromDB;