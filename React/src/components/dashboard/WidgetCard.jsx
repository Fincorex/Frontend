import React from 'react';
import Chart from 'react-apexcharts';

const WidgetCard = ({ title, value, change, changeType, chartData, chartColor }) => {
    const chartOptions = {
        series: [{
            name: 'Data',
            data: chartData
        }],
        chart: {
            height: 45,
            type: 'area',
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                top: 10,
                left: 0,
                bottom: 10,
                blur: 2,
                color: '#f0f4f7',
                opacity: 0.3
            }
        },
        colors: [chartColor],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false
        },
        stroke: {
            curve: 'smooth',
            width: 1
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="widget-first">
                    <div className="d-flex align-items-center mb-2">
                        <p className="mb-0 fs-16 fw-medium">{title}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="mb-0 fs-24 me-4">{value}</h3>
                        <div className="apex-charts">
                            <Chart options={chartOptions} series={chartOptions.series} type="area" height={45} width={100} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <span className={`fs-14 me-2 ${changeType === 'up' ? 'text-success' : 'text-danger'}`}>
                            {change}%
                            <i className={`mdi mdi-menu-${changeType === 'up' ? 'up' : 'down'} fs-16 ms-1`}></i>
                        </span>
                        <p className="text-muted fs-13 mb-0">Since last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidgetCard;
