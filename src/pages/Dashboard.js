import React from 'react'

import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';
import CanvasJSReact from '@canvasjs/react-charts';

import { chart, euro, green } from '../assets/index';
import Card from '../components/Card';

const Dashboard = () => {

    const cardData = [
        {
            id: 1,
            title: "Earning",
            amount: "$189k",
            growth: "37.8",
            icon: green
        },
        {
            id: 2,
            title: "Orders",
            amount: "$2.4k",
            growth: "2",
            icon: chart
        },
        {
            id: 3,
            title: "Balance",
            amount: "$2.4k",
            growth: "2",
            icon: euro
        },
        {
            id: 4,
            title: "Total Sales",
            amount: "$89k",
            growth: "11",
            icon: green
        }
    ]

    const data = [
        {
            name: 'Jan',
            amt: 2400,
        },
        {
            name: 'Feb',
            amt: 1398,
        },
        {
            name: 'Mar',
            amt: 9800,
        },
        {
            name: 'Apr',
            amt: 3908,
        },
        {
            name: 'May',
            amt: 4800,
        },
        {
            name: 'Jun',
            amt: 3800,
        },
        {
            name: 'Jul',
            amt: 4300,
        },
        {
            name: 'Aug',
            amt: 4,
        },
        {
            name: 'Sep',
            amt: 40,
        },
        {
            name: 'Oct',
            amt: 4300,
        },
        {
            name: 'Nov',
            amt: 300,
        },
        {
            name: 'Dec',
            amt: 430,
        },
    ];

    const options = {
        animationEnabled: true,
        title: {
            text: "Customers",
        },
        subtitles: [{
            text: "65% Total new customers",
            verticalAlign: "center",
            fontSize: 12,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }

    let CanvasJSChart = CanvasJSReact.CanvasJSChart;

    return (
        <main className='main-container'>

            <div className='main-cards'>
                {
                    cardData.map((item, id) => {
                        return (
                            <Card title={item.title} amount={item.amount} growth={item.growth} icon={item.icon} id={id} />
                        )
                    })
                }

            </div>

            <div className='charts'>
                <div style={{ backgroundColor: "white", borderRadius: 5 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amt" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <CanvasJSChart options={options} />
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Dashboard;
