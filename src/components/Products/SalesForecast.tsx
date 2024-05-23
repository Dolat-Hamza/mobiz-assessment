// components/SalesForecast.tsx
import React from "react";
import { Card } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Props } from "@/utils/Interfaces";

const SalesForecast: React.FC<Props> = ({ products }) => {
    // Sample historical sales data (you'll replace this with actual data)
    const historicalSales = [120, 135, 150, 168, 182, 195, 210]; // Example: Sales per week

    // Simple forecasting logic (replace with a real algorithm)
    const forecastSales = [...historicalSales];
    const lastValue = historicalSales[historicalSales.length - 1];
    for (let i = 0; i < 4; i++) { // Forecast next 4 weeks
        forecastSales.push(lastValue + (i + 1) * 5); // Linear growth example
    }

    const chartOptions = {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
        },
        title: {
            text: 'Sales Forecast',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                color: '#333',
            },
        },
        xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
        },
        yAxis: {
            title: {
                text: 'Sales',
            },
        },
        tooltip: {
            shared: true,

        },
        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                name: 'Historical Sales',
                data: historicalSales,
                color: '#36A2EB', // Blue color
            },
            {
                name: 'Forecast Sales',
                data: forecastSales.slice(historicalSales.length), // Only forecast data
                color: '#FFCE56', // Yellow color
                dashStyle: 'Dash', // Dashed line for forecast
            },
        ],
    };

    return (
        <Card title="Sales Forecast" style={{ width: '100%' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Card>
    );
};

export default SalesForecast;
