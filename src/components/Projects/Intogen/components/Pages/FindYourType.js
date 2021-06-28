import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Footer from '../Footer';
import Results from '../Results';
import '../../Intogen.css';
import data from '../diagrams/data/bachelorprogramms';



Survey.StylesManager.applyTheme("orange");

class FindYourType extends Component {
  constructor(props) {
      super(props)

      this.model = new Survey.Model(json)
      this.state = {

      }
      this.onCompleteComponent = this.onCompleteComponent.bind(this)
      }
onCompleteComponent = () => {
  this.setState({
    isCompleted: true
  })
}


render() {

var surveyRender = !this.state.isCompleted ? (
<Survey.Survey 
model={this.model}
json={json}
css={myCss}
showCompletedPage={false}
onComplete={this.onCompleteComponent}
/>
) : null


//{JSON.stringify(this.model.data, replacer)}
var onSurveyCompletion = this.state.isCompleted ? (
<div>
    {/* <Results /> */}
    {JSON.stringify(this.model.data)}
</div>
) : null;

// function replacer(key, value) {
//   if (key === 'Activist','Reflector','Theorist','Pragmatist') {
//     return undefined;
//   }
//   return value;
// };

console.log(this.model);

return (
<div className="App">
  <hr class="border2" data-content="Find your Type"/>
  <div className="page-container">
    <span className="subTitle">David Kolb's Learning Style <b>Questionnaire</b></span><br/>
      { surveyRender }
      { onSurveyCompletion }
  </div>
  <Footer/>
</div>
    );
  }
}


  var myCss = {
      matrix: {
        root: "table table-striped",
        rowError: "sv-matrix__row--error",
        label: "sv-item sv-radio sv-matrix__label",
        itemChecked: "sv-radio--checked",
        itemDisabled: "sv-item--disabled sv-radio--disabled",
        itemHover: "sv-radio--allowhover",
        materialDecorator: "sv-item__decorator sv-radio__decorator",
        cellText: "sv-matrix__text",
        cellTextSelected: "sv-matrix__text--checked",
      }
  };

  const json = {

    showProgressBar: "top",
    progressBarType: "buttons",
    showQuestionNumbers: "off",
    pages: [
      {
        navigationTitle: "Start",
        navigationDescription: "Introduction",
        questions: [
          {
            type: "radiogroup",
            name: "introduction",
            title: "Questions are based on David Kolb's research. This questionnaire is designed to define out your preferred learning styles(s) as an adult. Over the years, you have probably developed learning habits that help you benefit more from some experiences than from others. This questionnaire will probably take you about 7-10 minutes to complete. The accuracy of your results depends on how honest you are. There are no right or wrong answers. For each statement, choose if you would rather agree or disagree with it. If you find yourself wondering which situation to think of when answering a question, just think about how you are when you are working with people. Go with your first gut reaction instead of overthinking your response."
            
          }
        ]
      }, { 
            navigationTitle: "Activist",
            navigationDescription: "Score",
            questions: [
               {
                type: "matrix",
                name: "Activist", 
                title: "Please indicate if you agree or disagree with the following statements!",
                // isAllRowRequired: true,
                columns: [ 
                  { value: 10, 
                    text: "Agree" }, 
                  { value: 0, 
                    text: "Disagree" }],
                rows: [
                 { value: "2", 
                   text: "I often act without considering the possible consequences." },
                 { value: "4", 
                   text: "I often find that actions based on feelings are as sound as those based on careful thought and analysis." },
                 { value: "10", 
                   text: "I am attracted more to novel, unusual ideas than to practical ones." },
                 { value: "13",
                   text: "I enjoy fun-loving spontaneous people."},
                 { value: "18",
                   text: "I prefer to respond to events in a spontaneous, flexible way rather than plan things out in advance."},
                 { value: "21",
                   text: "It is more important to enjoy the present moment than to think about the past or future."},
                 { value: "24",
                   text: "More often than not, rules are there to be broken."},
                 { value: "30",
                   text: "I enjoy being the one that talks a lot."},
                 { value: "37",
                   text: "I find the formality of having specific objectives and plans stifling."},
                 { value: "39",
                   text: "I quickly get bored with methodical, detailed work."}
                       ],
              }
            ]
      }, {
        navigationTitle: "Reflector",
        navigationDescription: "Score",
        questions: [
          {
            type: "matrix",
            name: "Reflector",
            title:"Good! Now please proceed as before.",
            //isAllRowRequired: true,
            columns: [ 
              { value: 10, 
                text: "Agree" }, 
               { value: 0, 
                  text: "Disagree" }],
            rows: [
              { value: "5", 
                text: "I like the sort of work where I have time for thorough preparation and implementation." },
              { value: "9", 
                text: "I take care over how I interpret data and avoid jumping to conclusions." },
              { value: "14",
                text: "I pay careful attention to detail before coming to a conclusion."},
              { value: "16",
                text: "In discussions, I enjoy watching the plotting and scheming of the other participants."},
              { value: "17",
                text: "I prefer to have as many sources of information as possible - the more information to think over the better."},
              { value: "20",
                text: "I often get irritatetd by people who want to rush things."},
              { value: "25",
                text: "I prefer to stand back from a situation and consider all the perspectives."},
              { value: "29",
                text: "If I have a report to write, I tend to produce lots of drafts before settling on the final version."},
              { value: "33",
                text: "In discussions I am more likely to adopt a 'low profile' than to take the lead and do most of the talking."},
              { value: "34",
                text: "On balance, I do the listening rather than the talking."}
            ]
          }
        ]
      }, {
        navigationTitle: "Theorist",
        navigationDescription: "Score",
        questions: [
          {
            type: "matrix",
            name: "Theorist",
            title: "Again, please choose if you would rather agree or disagree!",
            //isAllRowRequired: true,
            columns: [ 
              { value: 10, 
                text: "Agree" }, 
               { value: 0, 
                  text: "Disagree" }],
            rows: [
              { value: "1",
                text: "I have strong beliefs about what is right and wrong, good and bad." }, 
              { value: "6", 
                text: "I regularly question people about their basic assumptions." },
              { value: "8", 
                text: "I get on best with logical, analytical people and less well with spontaneous, `irrational` people." },
              { value: "11",
                text: "I like to relate my actions to a general principle, standard or belief."},
              { value: "15",
                text: "I find it difficult to produce ideas on impulse."},
              { value: "22",
                text: "I tend to be a perfectionist."},
              { value: "27",
                text: "I believe that rational, logical thinking should win the day."},
              { value: "32",
                text: "In discussions with people I often find I am the most dispassionate and objective."},
              { value: "35",
                text: "I tend to be tough on people who find it difficult to adopt a logical approach."},
              { value: "40",
                text: "I like meetings to be run on methodical lines, sticking to laid down agenda."}
            ]
          }
        ]
      }, {
        navigationTitle: "Pragmatist",
        navigationDescription: "Score",
        questions: [
          {
            type: "matrix",
            name: "Pragmatist",
            title: "Almost done! Please indicate if you agree or disagree with the presented statements.",
            //isAllRowRequired: true,
            columns: [ 
              { value: 10, 
                text: "Agree" }, 
               { value: 0, 
                  text: "Disagree" }],
            rows: [
              { value: "3", 
                text: "I have a reputation for saying what I think, simply and directly." },
              { value: "7", 
                text: "When I hear about a new idea or approach, I immediatley start working out how to apply it in practice." },
              { value: "12",
                text: "In discussions, I like to get straight to the point."},
              { value: "19",
                text: "I tend to be attracted to techniques such as flow charts, contingency plans etc."},
              { value: "23",
                text: "In meetings, I put forward practical, realistic ideas."},
              { value: "26",
                text: "I think written reports should be short and to the point."},
              { value: "28",
                text: "In discussions, I get impatient with irrelevant issues and digressions."},
              { value: "31",
                text: "In discussions, I often find I am a realist, keeping people to the point and avoiding wild speculations."},
              { value: "36",
                text: "Most times I believe the end justifies the means."},
              { value: "38",
                text: "I do whatever is practical to get the jon done."}
            ]
          }
        ]
      }, 
      
      // study-programm

      {
        navigationTitle: "Finish",
        navigationDescription: "Personal Info",
        questions: [
          {
            type: "radiogroup",
            name: "BA/MA",
            title: "What are you currently studying?",
            // isRequired: true,
            colCount: 2,
            choices: [
                "Bachelor",
                "Master"
                    ]
                  }, {
                    type: "dropdown",
                    name: "programm",
                    title: "Choose your study programm.",
                    visibleIf: "{BA/MA}=Bachelor",
                    // isRequired: true,
                    colCount: 0,
                    choices: [
                      "B.Sc. Computer Engineering (Software Engineering)",
                      "B.Sc. Computer Engineering (Communications)",
                      "B.Sc. Electrical and Electronic Engineering",
                      "B.Sc. Mechanical Engineering",
                      "B.Sc. Metallurgy and Metal Forming",
                      "B.Sc. Steel Technology and Metall Forming",
                      "B.Sc. Structural Engineering"
                              ]
                  }, {
                    type: "dropdown",
                    name: "programm",
                    title: "Choose your study programm.",
                    visibleIf: "{BA/MA}=Master",
                    // isRequired: true,
                    colCount: 0,
                    choices: [
                      "M.Sc. Automation and Control Engineering",
                      "M.Sc. Computer Enginerring (Intelligent Networked Systems)",
                      "M.Sc. Computer Engineering (Interactive Systems and Visualization)",
                      "M.Sc. Computational Mechanics",
                      "M.Sc. Communications Engineering",
                      "M.Sc. Embedded Systems Engineering",
                      "M.Sc. Mechanical Engineering (General Mechanical Engineering)",
                      "M.Sc. Mechanical Engineering (Energy and Environmental Engineering)",
                      "M.Sc. Mechanical Engineering (Mechatronics)",
                      "M.Sc. Mechanical Engineering (Production and Logistics)",
                      "M.Sc. Mechanical Engineering (Ship and Offshore Technology)",
                      "M.Sc. Metallurgy and Metal Forming",
                      "M.Sc. Management and Technology of Water and Waste Water",
                      "M.Sc. Power Engineering"
                              ]            
                  }, {
                              type:"dropdown",
                              name: "most-liked",
                              title: "Please choose a course which you liked the most.",
                              // isRequired: true,
                              visibleIf: "{programm}=B.Sc. Computer Engineering (Software Engineering), B.Sc. Computer Engineering (Communications)",
                              colCount: 0,
                              choices: [ 
                                
                              ]
                            }, {
                              type:"dropdown",
                              name: "most-disliked",
                              title: "Please choose a course wich you disliked the most.",
                              // isRequired: true,
                              colCount: 0,
                              choices: [
                                "PLACEHOLDER"
                              ]
                            }, {
                              type: "radiogroup",
                              name: "gender",
                              title: "Please name your gender.",
                              // isRequired: true,
                              colCount: 3,
                              choices: [
                                  "Male",
                                  "Female",
                                  "Other",
                              ]
                            }, {
                              type: "radiogroup",
                              name: "* requiered fields"
                            }
                          ]
                        } 
                     ]
                  };

export default FindYourType;