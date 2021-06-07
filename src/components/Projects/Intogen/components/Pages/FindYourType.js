import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Footer from '../Footer'


Survey.StylesManager.applyTheme("modern");

class FindYourType extends Component {
    constructor(props) {
        super(props)
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
  
  var json = {
    title: "David Kolb's questionnaire",
    pages: [
          {
          
            questions: [
              {
                type: "matrix",
                name: "Please indicate if you agree or disagree with the following statements!", 
                isRequired: "true",
                columns: [ 
                  { value: 1, 
                    text: "Agree" }, 
                   { value: 2, 
                      text: "Disagree" }],
                rows: [
                 { value: "1", 
                   text: "I have strong beliefs about what is rigth and wrong, good and bad." }, 
                 { value: "2", 
                   text: "I often act without considering the possible consequences." },
                 { value: "3", 
                   text: "I have a reputation for saying what I think, simply and directly." }, 
                 { value: "4", 
                   text: "I often find that actions based on feelings are as sound as those based on careful thought and analysis." },
                 { value: "5", 
                   text: "I like the sort of work where I have time for thorough preparation and implementation." },
                 { value: "6", 
                   text: "I regularly question people about their basic assumptions." }, 
                 { value: "7", 
                   text: "When I hear about a new idea or approach, I immediatley start working out how to apply it in practice." }, 
                 { value: "8", 
                   text: "I get on best with logical, analytical people and less well with spontaneous, `irrational` people." },
                 { value: "9", 
                   text: "I take care over how I interpret data and avoid jumping to conclusions." },
                 { value: "10", 
                   text: "I am attracted more to novel, unusual ideas than to practical ones." }
                       ]
              }
            ]
      }, {

        questions: [
          {
            type: "matrix",
            name: "Good! Now please proceed as before.",
            isRequired: "true",
            columns: [ 
              { value: 1, 
                text: "Agree" }, 
               { value: 2, 
                  text: "Disagree" }],
            rows: [
              { value: "11",
                text: "I like to relate my actions to a general principle, standard or belief."},
              { value: "12",
                text: "In discussions, I like to get straight to the point."},
              { value: "13",
                text: "I enjoy fun-loving spontaneous people."},
              { value: "14",
                text: "I pay careful attention to detail before coming to a conclusion."},
              { value: "15",
                text: "I find it difficult to produce ideas on impulse."},
              { value: "16",
                text: "In discussions, I enjoy watching the plotting and scheming of the other participants."},
              { value: "17",
                text: "I prefer to have as many sources of information as possible - the more information to think over the better."},
              { value: "18",
                text: "I prefer to respond to events in a spontaneous, flexible way rather than plan things out in advance."},
              { value: "19",
                text: "I tend to be attracted to techniques such as flow charts, contingency plans etc."},
              { value: "20",
                text: "I often get irritatetd by people who want to rush things."}
            ]
          }
        ]
      }, {

        questions: [
          {
            type: "matrix",
            name: "Again, please choose if you would rather agree or disagree!",
            isRequired: "true",
            columns: [ 
              { value: 1, 
                text: "Agree" }, 
               { value: 2, 
                  text: "Disagree" }],
            rows: [
              { value: "21",
                text: "It is more important to enjoy the present moment than to think about the past or future."},
              { value: "22",
                text: "I tend to be a perfectionist."},
              { value: "23",
                text: "In meetings, I put forward practical, realistic ideas."},
              { value: "24",
                text: "More often than not, rules are there to be broken."},
              { value: "25",
                text: "I prefer to stand back from a situation and consider all the perspectives."},
              { value: "26",
                text: "I think written reports should be short and to the point."},
              { value: "27",
                text: "I believe that rational, logical thinking should win the day."},
              { value: "28",
                text: "In discussions, I get impatient with irrelevant issues and digressions."},
              { value: "29",
                text: "If I have a report to write, I tend to produce lots of drafts before settling on the final version."},
              { value: "30",
                text: "I enjoy being the one that talks a lot."}
            ]
          }
        ]
      },{

        questions: [
          {
            type: "matrix",
            name: "Almost done! Please indicate if you agree or disagree with the presented statements.",
            isRequired: "true",
            columns: [ 
              { value: 1, 
                text: "Agree" }, 
               { value: 2, 
                  text: "Disagree" }],
            rows: [
              { value: "31",
                text: "In discussions, I often find I am a realist, keeping people to the point and avoiding wild speculations."},
              { value: "32",
                text: "In discussions with people I often find I am the most dispassionate and objective."},
              { value: "33",
                text: "In discussions I am more likely to adopt a 'low profile' than to take the lead and do most of the talking."},
              { value: "34",
                text: "On balance, I do the listening rather than the talking."},
              { value: "35",
                text: "I tend to be tough on people who find it difficult to adopt a logical approach."},
              { value: "36",
                text: "Most times I believe the end justifies the means."},
              { value: "37",
                text: "I find the formality of having specific objectives and plans stifling."},
              { value: "38",
                text: "I do whatever is practical to get the jon done."},
              { value: "39",
                text: "I quickly get bored with methodical, detailed work"},
              { value: "40",
                text: "I like meetings to be run on methodical lines, sticking to laid down agenda."}
            ]
          }
        ]
      },
      {
        
        questions: [
          {
            type: "radiogroup",
            name: "What are you currently studying?",
            isRequired: true,
            colCount: 2,
            choices: [
                "Bachelors",
                "Masters"
                    ]
                  }
                ]
          }, {
            
            questions: [
              {
                type: "dropdown",
                name: "Choose your study programm",
                isRequired: true,
                colCount: 0,
                choices: [
                  "B.Sc. Computer Engineering (Software Engineering",
                  "B.Sc. Computer Engineering (Communications",
                  "B.Sc. Electrical and Electronic Engineering",
                  "B.Sc. Mechanical Engineering",
                  "B.Sc. Metallurgy and Metal Forming",
                  "B.Sc. Steel Technology and Metall Forming",
                  "B.Sc. Structural Engineering"
                          ]
                        }
                      ]
      }, {
        
        questions: [
          {
            type:"dropdown",
            name: "Please choose a course which you liked the most.",
            isRequired: true,
            colCount: 0,
            choices: [
              "Discrete Mathematics",
              "Softwaretechnik",
              "Rechnerarchtiketur",
              "Electronic Business",
              "Wahrscheinlichkeitsrechnung und Statistik",
              "Sicherheit in Kommunikationsnetzen",
              "Real-Time Systems",
              "Mathematics I1",
              "Mathematics I2",
              "Regelungstechnik EIT",
              "Digitale Medien",
              "Embedded Systems",
              "Mechanics I1",
              "Grundlagen der Künstlichen Intelligenz",
              "Grundlagen der Bildverarbeitung",
              "Optische Übertragungstechnik",
            ]
          }
        ]

      }, {
        
        questions: [
          {
              type: "radiogroup",
              name: "What is your gender",
              isRequired: true,
              colCount: 3,
              choices: [
                  "Male",
                  "Female",
                  "Other",
              ]
            }
          ]
      },
  ]
};


var surveyRender = !this.state.isCompleted ? (
  <Survey.Survey 
  json={ json }
  showCompletedPage={false}
  onComplete={this.onCompleteComponent}
  />
) : null

var onSurveyCompletion = this.state.isCompleted ? (
  <div style={{ fontSize: 50 }}>
    <h1>
      PLACEHOLDER
    </h1>
  </div>
) : null;

return (
  <div className="App">
    <div>
    <hr class="border2" data-content="Find your Type"/>
      { surveyRender }
      { onSurveyCompletion }
      <h1 style={{fontSize: 20, textAlign: "left", marginLeft: "55px" }}>
        * Requiered fields
      </h1>
      <Footer/>
    </div>
  </div>
      );
    }
}


export default FindYourType;