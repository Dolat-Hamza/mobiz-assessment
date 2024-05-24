// components/PriceDistributionChart.tsx
import React from 'react';
import {Card} from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Props} from '@/utils/Interfaces';

const PriceDistributionChart: React.FC<Props> = ({products}) => {
    const priceRanges = [0, 100, 200, 300, 400, 500, 600];
    const priceCounts = priceRanges.map((range) =>
        products.filter((p) => p.price >= range && p.price < range + 100).length
    );

    const chartOptions = {
        chart: {
            type: 'spline',  // Changed to spline chart
            backgroundColor: 'transparent',
        },
        title: {
            text: 'Price Distribution of Products',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                color: '#333', // Darker title color
            },
        },
        xAxis: {
            categories: priceRanges.map((range) => `$${range}-${range + 99}`),
            labels: {
                style: {
                    fontSize: '14px',
                    color: '#333',
                },
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Products',
                style: {
                    fontSize: '14px',
                    color: '#333',
                },
            },
            labels: {
                style: {
                    color: '#333',
                },
            },
        },
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true, // Show markers on the line
                    radius: 4,
                },
                lineWidth: 3, // Thicker line
                color: '#FF6384', // Example color (adjust as needed)
            },
        },
        series: [
            {
                name: 'Number of Products',
                data: priceCounts,
            },
        ],
    };

    return (
        <Card title="Price Distribution" style={{width: '100%'}}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
        </Card>
    );
};

export default PriceDistributionChart;
