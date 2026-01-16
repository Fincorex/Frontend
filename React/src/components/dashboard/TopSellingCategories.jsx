import React from 'react';
import Chart from 'react-apexcharts';

const TopSellingCategories = () => {
    const chartOptions = {
        series: [72.02, 24.53, 16.47, 18],
        labels: ['Fashion', 'Electronics', 'Automobiles', 'Property'],
        chart: {
            type: 'donut',
            height: 385
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                    size: '70%'
                }
            }
        },
        stroke: {
            borderRadius: 15,
            width: 4,
            colors: ['#fff']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            padding: {
                bottom: -190
            }
        },
        colors: ['#7168EE', '#46B277', '#963b68', '#01D4FF'],
        legend: {
            show: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 250
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '65%'
                            }
                        }
                    },
                    grid: {
                        padding: {
                            bottom: -90
                        }
                    }
                }
            },
            {
                breakpoint: 1440,
                options: {
                    chart: {
                        height: 350
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '65%'
                            }
                        }
                    },
                    grid: {
                        padding: {
                            bottom: -170
                        }
                    }
                }
            }
        ]
    };

    const categories = [
        { name: 'Fashion', change: '12.48%', color: 'text-primary' },
        { name: 'Electronics', change: '5.23%', color: 'text-success' },
        { name: 'Automobiles', change: '15.58%', color: '' },
        { name: 'Property', change: '14.15%', color: '' }
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-header">
                <div className="d-flex align-items-center">
                    <h5 className="card-title mb-0">Monthly Inflow Chart</h5>
                </div>
            </div>

            <div className="card-body">
                <div className="apex-charts">
                    <Chart options={chartOptions} series={chartOptions.series} type="donut" height={385} />
                </div>
                <div className="device-view text-center">
                    <p className="text-uppercase mb-1 fw-medium text-muted">Monthly Inflow</p>
                    <h3 className="mb-0 fw-semibold">15,685</h3>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        {categories.slice(0, 2).map((cat, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center p-1">
                                <div>
                                    <i className={`mdi mdi-circle fs-12 align-middle me-1 ${cat.color || ''}`} style={!cat.color ? { color: chartOptions.colors[idx] } : {}}></i>
                                    <span className="align-middle fw-semibold">{cat.name}</span>
                                </div>
                                <span className="fw-medium text-muted float-end">
                                    <i className="mdi mdi-arrow-up text-success align-middle fs-14 me-0 me-md-1"></i>
                                    {cat.change}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="col">
                        {categories.slice(2).map((cat, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center p-1">
                                <div>
                                    <i className="mdi mdi-circle fs-12 align-middle me-1" style={{ color: chartOptions.colors[idx + 2] }}></i>
                                    <span className="align-middle fw-semibold text-truncate">{cat.name}</span>
                                </div>
                                <span className="fw-medium text-muted float-end">
                                    <i className="mdi mdi-arrow-up text-success align-middle fs-14 me-0 me-md-1"></i>
                                    {cat.change}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingCategories;
