import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Activist',
    Male: 20,
    Female: 15,
    Other: 0,
  },
  {
    name: 'Reflector',
    Male: 10,
    Female: 25,
    Other: 1,
  },
  {
    name: 'Pragmatist',
    Male: 30,
    Female: 4,
    Other: 0,
  },
  {
    name: 'Theorist',
    Male: 7,
    Female: 15,
    Other: 0,
  }
];



export default class Diagram extends PureComponent {
    render() {
        return (
            <>
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: -20,
                        bottom: 5,
                    }}
                >
                
                <CartesianGrid strokeDasharray="1" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Percentage(%)", angle: -90 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Male" fill=" rgb(165, 64, 64)" />
                <Bar dataKey="Female" fill="rgb(51, 99, 255)" />
                <Bar dataKey="Other" fill="rgb(219, 205, 0)" />
                </BarChart>
            </>
        )
    }
}





// import Highcharts from 'highcharts';

// const publicPort = 'https://intogen-backend.herokuapp.com/';
// const data = '.data/out.csv';

// export default function Diagram() {
//   const countryBox = document.getElementById('countryBox');
//       for(const i=0; i<data.length; i++) {
//         const option = document.createElement("option");
//         option.text = data[i];
//           countryBox.add(option);
//       }
//   const req = {country:countryBox.value};
    
//   $.ajax({
//       type:'post',
//       url:publicPort + 'GetUniqueNationalities',
//       contentType: 'application/json',
//       data:JSON.stringify(req),
//       success:function(res) {
//         Highcharts.chart({
//           title: {
//               text: data.title.text
//           },
//           tooltip: {
//               pointFormat: '{series.name}: <b>{point.y}</b>'
//           },
//           xAxis: {
//               categories: data.XAxis.categories
//           },
//           yAxis: {
//               title: {text: "Percentage (%)"},
//               max: 100
//           },
//           labels: {
//               items: [{
//                   style: {
//                       left: '60px',
//                       top: '0px',
//                       color: (
//                           Highcharts.defaultOptions.title.style &&
//                           Highcharts.defaultOptions.title.style.color
//                       ) || 'black'
//                   }
//               }]
//           },
//           series: [{
//               type: 'column',
//               name: 'Male',
//               data: data.barChartData.maleData
//           }, {
//               type: 'column',
//               name: 'Female',
//               data: data.barChartData.femaleData
//           }, {
//               type: 'column',
//               name: 'Other',
//               data: data.barChatData.otherData
//           }]
//         })
//       }
//   })
  
// }