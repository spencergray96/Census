import React, { Component } from 'react';
import '../../../style.css';

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSurvey: this.props.selectedSurvey,
            surveyQuestions:[
                {
                    surveyName: "What's your favourite city?",
                    surveyDesc: "Help us figure this out",
                    answers: [
                        {
                            answer: "Vancouver",
                            votes: 56
                        },
                        {
                            answer: "North Vancouver",
                            votes: 32
                        },
                        {
                            answer: "West Vancouver",
                            votes: 18
                        },
                        {
                            answer: "Ladner",
                            votes: 99
                        }
                    ]
                },
                {
                    surveyName: "What's your favourite color?",
                    surveyDesc: "You're doing your nation a service by helping contribute data to this very important survey! You're doing your nation a service by helping contribute data to this very important survey! You're doing your nation a service by helping contribute data to this very important survey! You're doing your nation a service by helping contribute data to this very important survey!",
                    answers: [
                        "Red",
                        "Blue",
                        "Green",
                        "Purple"
                    ]
                },
            ]
        };

        this.handleSurveyChange = this.handleSurveyChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        
        fetch("http://localhost:8888/census/server/getQuestions.php").then((resp)=>{
            return resp.json();
        }).then((json)=>{
            this.setState({
                surveyQuestions: json
            })
        });
        
        fetch("http://localhost:8888/census/server/getResponses.php").then((resp)=>{
            return resp.json();
        }).then((json)=>{
            let temp = json;
            console.log(temp);
        });
        
        fetch("http://localhost:8888/census/server/getAnswers.php").then((resp)=>{
            return resp.json();
        }).then((json)=>{

            let questionCount = 1;
            let tempArr = [];
            
            console.log(json);
            
            for(var i = 0; i < this.state.surveyQuestions.length; i++) {
                for(var j = 0; j < json.length; j++){
                    if(json[j]["fKey"] == questionCount){
                        
                        tempArr.push(json[j]["solution"]);   
                    }
                }
                console.log(tempArr);
                this.setState({
                    surveyQuestions:tempArr
                });
                tempArr = [];
                questionCount++;
            }
            
        });
    }
    
    handleSurveyChange(data) {
        this.setState({
            selectedSurvey: data
        }, ()=> {
            this.props.handleSurveyChange(this.state.selectedSurvey);
        });

    }


    render() {

        let surveyList;
        let surveyQuestions = this.state.surveyQuestions;

        surveyList = surveyQuestions.map((obj, i)=>{
            return (
                <div key={"surveyListItem" + i} className="surveyListItem col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="surveyListItemInfo d-inline-block col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div
                                className="surveyListItemTitle"
                                dangerouslySetInnerHTML={{__html: surveyQuestions[i].surveyName}}
                            >
                            </div>
                            <div
                                className="surveyListItemDesc"
                                dangerouslySetInnerHTML={{__html: surveyQuestions[i].surveyDesc}}
                            >
                            </div>
                        </div>
                        <div className="surveyListGoButtonDiv d-inline-block col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <button
                                onClick={()=>this.handleSurveyChange(surveyQuestions[i])}
                                className="surveyListGoButton btn btn-success align-middle"
                            >
                                Answer Survey
                            </button>
                        </div>
                    </div>
                    <hr className="bottomSurveyItemHR"/>
                </div>
            );
        });

        return (
            <div>
                {surveyList}
            </div>
        );
    }
}

export default SurveyList;