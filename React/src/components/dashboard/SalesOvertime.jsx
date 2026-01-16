import React from 'react';
import Chart from 'react-apexcharts';

const SalesOvertime = () => {
    const chartOptions = {
        series: [
            {
                name: 'Revenue',
                data: [9000, 15000, 6000, 9500, 16000, 8500, 14000, 19000, 12000, 8500, 15000, 18564]
            },
            {
                name: 'Order',
                data: [5000, 3000, 13000, 5000, 9000, 13500, 19000, 9500, 3000, 14000, 10500, 8500]
            }
        ],
        chart: {
            type: 'area',
            height: 290,
            toolbar: {
                show: false
            }
        },
        colors: ['#7168EE', '#27ebb0'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#9aa0ac'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return '$' + (val / 1000) + 'K';
                },
                style: {
                    colors: '#9aa0ac'
                }
            },
            min: 0,
            max: 20000,
            tickAmount: 4
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: 'light',
            marker: {
                show: true
            },
            y: {
                formatter: function (val) {
                    return '$' + val.toLocaleString();
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                width: 12,
                height: 12,
                radius: 12
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex align-items-center">
                    <h5 className="card-title mb-0">Monthly Outflow Chart</h5>
                </div>
            </div>

            <div className="card-body">
                <div className="apex-charts">
                    <Chart options={chartOptions} series={chartOptions.series} type="area" height={290} />
                </div>
            </div>
        </div>
    );
};

export default SalesOvertime;
