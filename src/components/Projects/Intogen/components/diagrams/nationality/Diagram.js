import React, { Component, useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../data/out'

const Diagram = () => {
  const [options, setOptions] = useState({
    title: {
      text: "Learners' Overview"
    },
    // series: [{ data: [] }],
    series: [{
            name: 'Female',
            data: [data.Activist, data.Reflector, data.Theorist, data.Pragmatist]
      
        }, {
            name: 'Male',
            data: [data.Activist, data.Reflector, data.Theorist, data.Pragmatist]
      
        }, {
            name: 'Other',
            data: [data.Activist, data.Reflector, data.Theorist, data.Pragmatist]
      
        }],
    chart: {
      type: 'column'
    },
        xAxis: {
            categories: [
                'Activist',
                'Reflector',
                'Theorist',
                'Pragmatist'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
  });

  useEffect(() => {
    fetch("out.js")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setOptions({ series: [{ data: data }] });
      });
  }, []);


  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Diagram;

// const options = {
//   chart: {
//     type: 'column'
//   },
//   title: {
//       text: "Learners' Overview"
//   },
//   xAxis: {
//       categories: [
//           'Activist',
//           'Reflector',
//           'Theorist',
//           'Pragmatist'
//       ],
//       crosshair: true
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Percentage (%)'
//       }
//   },
//   tooltip: {
//       headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//       pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//           '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
//       footerFormat: '</table>',
//       shared: true,
//       useHTML: true
//   },
//   plotOptions: {
//       column: {
//           pointPadding: 0.2,
//           borderWidth: 0
//       }
//   },
//   series: [{
//       name: 'Female',
//       data: [49.9, 71.5, 106.4, 129.2]

//   }, {
//       name: 'Male',
//       data: [83.6, 78.8, 98.5, 93.4]

//   }, {
//       name: 'Other',
//       data: [48.9, 38.8, 39.3, 41.4]

//   }]
// }


// class Diagram extends Component {

//   render() {
//     return(
//       <div className="Diagram">
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       </div>
//     )
//   }
// }

// export default Diagram;


// import 'c3.min.css';
// import 'd3.min.js';
// import 'c3.min.js';

// export default function Diagram() {
//   const data_static = [
//     { 
//       Activist: 70,
//       Reflector: 90,
//       Theorist: 60,
//       Pragmatist: 90,
//       Major: "Master",
//       Study_program: "M.Sc. Computer Engineering (Intelligent Networked Systems)",
//       Subject1: "Advanced Web Technologies",
//       Gpa1: "2",
//       Subject2: "INVALID",
//       Gpa2: "INVALID",
//       Gender: "Male",
//       Nationality: "Pakistan",
//       E_mail: "" 
//     },
//     {
//       Activist: 40,
//       Reflector: 90,
//       Theorist: 80,
//       Pragmatist: 90,
//       Major: "Master",
//       Study_program: "M.Sc. Computer Engineering (Intelligent Networked Systems)",
//       Subject1: "Information Retrieval",
//       Gpa1: "1",
//       Subject2: "Entwicklung sicherer Software",
//       Gpa2: "3",
//       Gender: "Male",
//       Nationality: "Pakistan",
//       E_mail: ""
//     }]


//     d3.csv(out.csv, function (row) {
//       return {
//         Gender: row.Gender,
//         Activist: row.Activist,
//         Theorist: row.Theorist,
//         Reflector: row.Reflector,
//         Pragmatist: row.Pragmatist,
//       };
//     }).then(function (data) {
//       const chart = c3.generate({
//         bindto: "#chart",
//         data: {
//           json: data,
//           type: "bar",
//           keys: {
//             x: "Gender",
//             value: ["Female", "Male", "Other"],
//           },
//         },
//         axis: {
//           x: {
//             type: "category",
//             label: {text: "Learning Styles", position: "outer-center"},
//           },
//           y: {
//             label: {text: "Percentage (%)", position: "outer-center"},
//           },
//         },
        
//       })
//     })
// }






