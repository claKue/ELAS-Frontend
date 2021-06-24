import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Diagram(props) {

  const options = {
    chart: {
      type: 'column'
    },
    title: {
        text: "Learners' Overview"
    },
    xAxis: {
        categories: props.categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
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
    },
    series: [{
        name: 'Male',
        data: props.males,
        color: Highcharts.getOptions().colors[1] 
    },
    {
        name: 'Female',
        data: props.females,
        color: Highcharts.getOptions().colors[3]
    }, 
    {
        name: 'Other',
        data: [],
        color: Highcharts.getOptions().colors[6]
    }
    ]
  }

    return(
      <div className="Diagram">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
}

export default Diagram;