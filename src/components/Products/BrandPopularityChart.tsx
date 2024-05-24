// components/BrandPopularityChart.tsx
import React from 'react';
import {Card} from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Props} from '@/utils/Interfaces';
import {countProductsByBrand} from '@/utils/ProductCalculations';

const BrandPopularityChart: React.FC<Props> = ({products}) => {
    const brandCounts = countProductsByBrand(products);
    const brands = Object.keys(brandCounts);
    const data = brands.map(brand => ({
        name: brand,
        y: brandCounts[brand],
    }));

    const chartOptions = {
        chart: {
            type: 'pie',
            backgroundColor: '#ffffff',
            style: {
                fontFamily: "'Roboto', sans-serif",
            },
        },
        title: {
            text: 'Brand Popularity',
            style: {
                fontSize: '24px',
                color: '#333',
            },
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                allowPointSelect: true,
                cursor: "pointer",
                borderRadius: 100,
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        // legend: {
        //     layout: 'horizontal',
        //     align: 'bottom',
        //     verticalAlign: 'middle',
        //     backgroundColor: '#ffffff',
        //     borderColor: '#e6e6e6',
        //     borderWidth: 1,
        //     borderRadius: 8,
        //     padding: 10,
        //     itemStyle: {
        //         fontSize: '14px',
        //         fontWeight: 'bold',
        //         color: '#333',
        //         cursor: 'pointer',
        //         backgroundColor: '#f9f9f9',
        //         borderRadius: 4,
        //         padding: '5px 10px',
        //         margin: '5px 0',
        //     },
        //     itemHoverStyle: {
        //         color: '#000',
        //         backgroundColor: '#e0e0e0',
        //     },
        //     symbolHeight: 12,
        //     symbolWidth: 12,
        //     symbolRadius: 6,
        // },
        legend: {
            enabled: true

        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data,
        }],
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    };

    return (
        <Card title="Brand Popularity" rootClassName={"w-full h-full"}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </Card>
    );
};

export default BrandPopularityChart;
