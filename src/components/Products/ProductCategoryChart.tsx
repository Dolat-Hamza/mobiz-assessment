// components/ProductCategoryChart.tsx

import React from 'react';
import { Card } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
interface Props {
    productCountsByCategory: Record<string, number>;
}

const ProductCategoryChart: React.FC<Props> = ({ productCountsByCategory }) => {
    const categories = Object.keys(productCountsByCategory);
    const data = Object.values(productCountsByCategory);

    const chartOptions = {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent', // Transparent background for a clean look
        },
        title: {
            text: 'Product Categories',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                color: '#333',
            },
        },
        xAxis: {
            categories: categories,
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
        legend: {
            enabled: true, // Hide legend
        },
        tooltip: {
            headerFormat: '<span style="font-size: 14px; font-weight: bold">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                borderRadius: 5,
                colorByPoint: true,
                colors: categories.map((category, index) => {
                    // Generating a color based on the category (you can customize this)
                    const hue = (index * 137.508) % 360; // Golden Angle Approximation
                    return `hsl(${hue}, 75%, 50%)`;
                }),
            },
        },
        series: [
            {
                name: 'Number of Products',
                data: data,
            },
        ],
    };

    return (
        <Card title="Product Categories by Count" style={{ width: '100%' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Card>
    );
};

export default ProductCategoryChart;

