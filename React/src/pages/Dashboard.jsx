import React from 'react';
import WidgetCard from '../components/dashboard/WidgetCard';
import StatsCard from '../components/analytics/StatsCard';
import TopSellingCategories from '../components/dashboard/TopSellingCategories';
import SalesOvertime from '../components/dashboard/SalesOvertime';
import TopSellingProduct from '../components/dashboard/TopSellingProduct';
import TrafficAnalytic from '../components/dashboard/TrafficAnalytic';
import RevenueStatistics from '../components/dashboard/RevenueStatistics';
import LatestOrder from '../components/dashboard/LatestOrder';
import TransactionBalances from '../components/dashboard/TransactionBalances';
import SubscriptionDetails from '../components/dashboard/SubscriptionDetails';

const Dashboard = () => {
    // Daily Widget data
    const dailyWidgets = [
        {
            title: 'Today\'s Transaction',
            value: '8,848',
            change: '16.8',
            changeType: 'up',
            chartData: [10, 15, 9, 18, 22, 17, 25, 20, 15, 10, 12, 8],
            chartColor: '#c26316'
        },
        {
            title: 'New Customers',
            value: '2,756',
            change: '3.51',
            changeType: 'up',
            chartData: [15, 20, 16, 27, 34, 27, 35, 28, 20, 27, 32, 15],
            chartColor: '#46B277'
        },
        {
            title: 'Today\'s Loan',
            value: '5,957',
            change: '6.87',
            changeType: 'down',
            chartData: [12, 25, 18, 40, 28, 35, 21, 38, 32, 15, 45, 29],
            chartColor: '#E7366B'
        },
        {
            title: 'Today\'s Inflow',
            value: '$8,473',
            change: '9.19',
            changeType: 'up',
            chartData: [14, 19, 12, 24, 30, 21, 27, 23, 18, 13, 16, 11],
            chartColor: '#7168EE'
        },
        {
            title: 'Today\'s Outflow',
            value: '9.62K',
            change: '16.8',
            changeType: 'down',
            chartData: [25, 30, 23, 30, 36, 27, 32, 45, 34, 34, 30, 19],
            chartColor: '#E77636'
        }
    ];

    // Monthly Widget data
    const monthlyWidgets = [
        {
            title: 'Monthly Inflow',
            value: '245,320',
            change: '12.5',
            changeType: 'up',
            chartData: [18, 22, 15, 28, 35, 25, 38, 32, 28, 20, 25, 18],
            chartColor: '#c26316'
        },
        {
            title: 'Monthly Inter Transfer',
            value: '78,450',
            change: '8.3',
            changeType: 'up',
            chartData: [20, 28, 22, 35, 42, 35, 45, 38, 32, 35, 40, 25],
            chartColor: '#46B277'
        },
        {
            title: 'Monthly Loans book',
            value: '156,890',
            change: '4.2',
            changeType: 'up',
            chartData: [22, 35, 28, 48, 38, 45, 31, 48, 42, 25, 55, 39],
            chartColor: '#E7366B'
        },
        {
            title: 'Monthly Loan Repayment',
            value: '$285,670',
            change: '15.7',
            changeType: 'up',
            chartData: [24, 29, 22, 34, 40, 31, 37, 33, 28, 23, 26, 21],
            chartColor: '#7168EE'
        },
        {
            title: 'Monthly Outflow',
            value: '198.5K',
            change: '6.4',
            changeType: 'down',
            chartData: [35, 40, 33, 40, 46, 37, 42, 55, 44, 44, 40, 29],
            chartColor: '#E77636'
        }
    ];

    const statsCards = [
        {
            title: 'Total Revenues',
            value: '$599',
            change: '19',
            changeType: 'success',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" class="me-2"><path fill="#7168EE" d="M12.5 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0m5.214-10.136A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764zm0 .012L16 4.25q0-.078-.005-.154M10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1m0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5"/></svg>`
        },
        {
            title: 'Product Viewed',
            value: '10,413',
            change: '19',
            changeType: 'success',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" class="me-2"><path fill="#7168EE" d="M9.354 12.5a2.75 2.75 0 0 1 0-1.5h-7a3.4 3.4 0 0 0-.104.75c0 .203.036.459.104.75zm2.645 6H6.68C8.063 19.39 9.818 20 12 20h.002c3.641 0 6.091-1.698 7.612-3.556a11 11 0 0 0 1.624-2.707c.33-.794.514-1.528.514-1.987s-.184-1.193-.514-1.987c-.34-.82-.869-1.784-1.624-2.707C18.093 5.198 15.642 3.5 12 3.5c-2.183 0-3.938.61-5.322 1.5h5.323c3.11 0 5.16 1.427 6.451 3.006a9.5 9.5 0 0 1 1.4 2.332c.302.73.4 1.246.4 1.412s-.098.682-.4 1.412a9.5 9.5 0 0 1-1.4 2.332c-1.292 1.579-3.342 3.006-6.45 3.006zM5.385 6a10 10 0 0 0-1.34 1.5h7.954V6zm6.614 2.5H3.391A11 11 0 0 0 2.67 10h7.209a2.75 2.75 0 1 1 0 3.5h-7.21q.045.117.095.237c.164.395.372.822.627 1.263h8.608v1a4.25 4.25 0 1 0 0-8.5zm0 7.5H4.044q.165.223.344.444c.296.362.628.718.997 1.056h6.614z"/></svg>`
        },]

    return (
        <div className="container-fluid">
            {/* Page Header */}
            <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                <div className="flex-grow-1">
                    <h4 className="fs-18 fw-semibold m-0">Dashboard</h4>
                </div>

                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item">Fincorex</li>
                        <li className="breadcrumb-item">Dashboard</li>
                        <li className="breadcrumb-item active">Sales</li>
                    </ol>
                </div>
            </div>

            <div className="mb-5">
                {/* Daily Widgets */}
                <div className="row mb-2">
                    <div className="col-12">
                        <h5 className="fs-16 fw-semibold mb-3">Daily Records</h5>
                    </div>
                </div>
                <div className="row">
                    {dailyWidgets.slice(0, 3).map((widget, index) => (
                        <div key={index} className="col-md-6 col-xl-4">
                            <WidgetCard {...widget} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {dailyWidgets.slice(3, 5).map((widget, index) => (
                        <div key={index} className="col-md-6 col-xl-6">
                            <WidgetCard {...widget} />
                        </div>
                    ))}
                </div>

                {/* Monthly Widgets */}
                <div className="row mb-2 mt-4">
                    <div className="col-12">
                        <h5 className="fs-16 fw-semibold mb-3">Monthly Records</h5>
                    </div>
                </div>
                <div className="row">
                    {monthlyWidgets.slice(0, 3).map((widget, index) => (
                        <div key={index} className="col-md-6 col-xl-4">
                            <WidgetCard {...widget} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {monthlyWidgets.slice(3, 5).map((widget, index) => (
                        <div key={index} className="col-md-6 col-xl-6">
                            <WidgetCard {...widget} />
                        </div>
                    ))}
                </div>
            </div>




            {/* Financial Overview */}

            <div className="row mb-5 mx-0">
                <div className="col-12">
                    <h2 className="fs-24 fw-bold mb-4 text-center">Financial Overview</h2>

                    <div className="row justify-content-center align-items-center">
                        {statsCards.map((card, index) => (
                            <div key={index} className="col-md-6 col-lg-6">
                                <StatsCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="row mb-5">
                <div className="col-md-12 col-xl-4">
                    <TopSellingCategories />
                </div>

                <div className="col-md-12 col-xl-8">
                    <SalesOvertime />
                </div>
            </div>

            {/* Subscription and Balances */}
            <div className="row mb-5">
                <div className="col-xl-3 mb-3 mb-xl-0">
                    <SubscriptionDetails />
                </div>
                <div className="col-xl-9">
                    <TransactionBalances />
                </div>
            </div>

            {/* Analytics Row
            <div className="row mb-5">
                <div className="col-md-12 col-xxl-4 col-xl-12">
                    <TopSellingProduct />
                </div>

                <div className="col-md-6 col-xxl-4 col-xl-6">
                    <TrafficAnalytic />
                </div>

                <div className="col-md-6 col-xxl-4 col-xl-6">
                    <RevenueStatistics />
                </div>
            </div>

            Latest Orders
            <div className="row mb-5">
                <div className="col-xl-12">
                    <LatestOrder />
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
