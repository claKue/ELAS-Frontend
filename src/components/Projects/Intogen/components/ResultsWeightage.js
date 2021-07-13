import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function ResultsCourses(props) {

  const options = {
    chart: {
      type: 'column'
    },
    title: {
        text: "Courses weightage"
    },
    xAxis: {
        categories: ["Course1", "Course2", "Course1", "Course2", "Course1", "Course2","Course1", "Course2", "Course1", "Course2"],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 7,
        title: {
            text: 'Weightage'
        }
    },
    tooltip: {
        valueDecimals: 0,
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
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
        type: 'column',
        colorByPoint: true,
        data:  [5, 3, 2, 7, 1, 2, 1, 1, 6, 5, 8, 2, 4, 3],
        showInLegend: false
    }]
  }

    return(
      <div className="Diagram">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
}

export default ResultsCourses;