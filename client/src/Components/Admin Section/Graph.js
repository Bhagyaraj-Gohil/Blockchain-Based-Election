import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontColor = 'rgba(255,255,255,1)';
defaults.global.defaultFontSize = 15;

const Graph = (props) => {
    const data = {
        labels: props.candidates.map((candidate) => (
            candidate['name']
        )),
        datasets: [
          {
            label: 'Votes',
            backgroundColor: 'rgba(255,255,255,0.75)',
            data: props.candidates.map((candidate) => (
                candidate.voteCount
            ))
          }
        ]
    };

    console.log(defaults);

    return (
        <>
            <HorizontalBar
                data={data} 
                options={{
                    animation: {
                        duration: 3000,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        datalabels: {
                            display: true,
                            color: 'rgba(255,255,255,0.87)',
                            borderRadius:10,
                            font: {
                               weight: 'bold'
                            },
                        }
                    },
                    title:{
                        display:true,
                        text:'Election Results',
                        fontSize:20
                    },
                    legend:{
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: 'rgba(255,255,255,0.03)'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: 'rgba(255,255,255,0.03)'
                            }
                        }]
                    }
                }}
            />
        </>
    )
}

export default Graph;