import React, { Component } from 'react';
import LandingPage from './pages/landing/LandingPage';
import Browse from './pages/browse/Browse';
import Answer from './pages/answer/Answer';
import Results from './pages/results/Results';
//import results

class Main extends Component {
    constructor() {
        super();
        this.state = {
            signedIn: false,
            currentPage: "landing",
            selectedSurvey: null,
            test: {}
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSurveyChange = this.handleSurveyChange.bind(this);
        this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount() {
        
        fetch("../../server/getQuestions.php").then((resp)=>{
            console.log(resp);
        }).then((json)=>{
            console.log(json);
            // I want to change the fetch into an object here
            this.setState({
                test:json
            })
        });
        
//        var xmlhttp = new XMLHttpRequest();
//        xmlhttp.onreadystatechange = () => {
//            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//                console.log(xmlhttp.responseText);
//            }
//        };
//        xmlhttp.open("GET", "http://localhost:8888/server/getQuestions.php", true);
//        xmlhttp.send();       
        
    }    

    handlePageChange(data) {
        let changeToThis;

        switch(data){
            case "switchToBrowse":
                changeToThis = "browse";
                break;
            case "switchToAnswer":
                changeToThis = "answer";
                break;
            case "switchToResults":
                changeToThis = "results";
                break;
            default:
                changeToThis = "landing";
                break;
        }
        this.componentDidMount();

        this.setState({
            currentPage: changeToThis
        });
    }

    handleSurveyChange(data) {
        this.setState({
            selectedSurvey: data
        }, ()=>{
            console.log("made it to MAIN.JS, and the passed in survey is:", this.state.selectedSurvey);
        });
    }

    handleAnswerSubmission(data) {

    }

    render() {

        let comp;

        switch(this.state.currentPage) {
            case "landing":
                comp = <LandingPage
                    handlePageChange = {this.handlePageChange}
                />;
                break;
            case "browse":
                comp = <Browse
                    handlePageChange = {this.handlePageChange}
                    selectedSurvey = {this.state.selectedSurvey}
                    handleSurveyChange = {this.handleSurveyChange}
                />;
                break;
            case "answer":
                comp = <Answer
                    handlePageChange = {this.handlePageChange}
                    selectedSurvey = {this.state.selectedSurvey}
                />;
                break;
            case "results":
                comp = <Results
                    handlePageChange = {this.handlePageChange}
                    selectedSurvey = {this.state.selectedSurvey}
                />;
                break;
            default:
                comp = <LandingPage
                    handlePageChange = {this.handlePageChange}
                />;
                break;
        }

        return (
            <div className="pageContent">
                {comp}
            </div>
        );
    }
}

export default Main;