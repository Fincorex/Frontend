import React from 'react';
import Chart from 'react-apexcharts';
import {
    sparklineOptions,
    categoriesChartOptions,
    salesOvertimeOptions,
    revenueChartOptions
} from '../data/chartOptions';

/**
 * StatWidget Component
 * 
 * Reusable component for displaying a specific statistic with a sparkline chart.
 * 
 * Props:
 * - title: Title of the metric (e.g., "Total Sales")
 * - value: Main metric value (e.g., "8,848")
 * - seriesData: Array of numbers for the sparkline chart.
 * - color: Color theme for the sparkline.
 * - percent: Percentage change string.
 * - trend: 'up' or 'down' direction for the trend icon/color.
 */
const StatWidget = ({ title, value, chartId, seriesData, color, percent, trend }) => {
    // Generate chart options dynamically based on the color prop
    const options = sparklineOptions(color);
    const series = [{ name: title, data: seriesData }];

    return (
        <div className="col-md-6 col-lg-4 col-xl">
            <div className="bg-card-bg rounded-lg shadow-sm border border-border overflow-hidden h-full">
                <div className="p-4">
                    <div className="flex items-center mb-2">
                        <p className="mb-0 text-body-text fs-16 font-medium">{title}</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="mb-0 text-2xl font-semibold text-emphasis-text me-4">{value}</h3>
                        <div className="w-[80px]">
                            {/* Sparkline Chart */}
                            <Chart options={options} series={series} type="area" height={45} />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className={`text-${trend === 'up' ? 'success' : 'danger'} text-sm me-2 flex items-center`}>
                            {percent}
                            <iconify-icon icon={`solar:double-alt-arrow-${trend === 'up' ? 'up' : 'down'}-bold-duotone`}></iconify-icon>
                        </span>
                        <p className="text-gray-500 text-xs mb-0">Since last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * BalanceWidget Component
 * 
 * Displays a balance with a floating details tooltip on hover.
 */
const BalanceWidget = ({ title, balance, details }) => {
    return (
        <div className="group relative bg-card-bg rounded-lg shadow-sm border border-border p-4 h-full hover:shadow-md transition-shadow cursor-default z-0 hover:z-10">
            <h6 className="text-gray-500 text-xs uppercase mb-2 font-medium tracking-wider">{title}</h6>
            <h3 className="text-emphasis-text font-semibold text-xl mb-0">{balance}</h3>

            {/* Floating Details Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] w-48 bg-emphasis-text text-card-bg text-xs rounded shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="relative z-10">
                    <p className="mb-0 text-center">{details}</p>
                </div>
                {/* Tail */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emphasis-text"></div>
            </div>
        </div>
    );
};

/**
 * SalesDashboard Page
 * 
 * The main landing view for the dashboard.
 * Displays key sales metrics, a category breakdown, and sales analysis charts.
 */
const SalesDashboard = () => {
    return (
        <div className="container-fluid">
            {/* Page Title & Breadcrumb */}
            <div className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h4 className="text-lg font-semibold m-0 text-emphasis-text">Daily Transactions</h4>
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                    <li>Fincorex</li>
                    <li>/</li>
                    <li className="text-primary">Dashboard</li>
                </ol>
            </div>

            {/* Stats Row: 5 Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                <StatWidget
                    title="Today's Transactions"
                    value="8,848"
                    color="#c26316"
                    seriesData={[10, 15, 9, 18, 22, 17, 25, 20, 15, 10, 12, 8]}
                    percent="16.8%"
                    trend="up"
                />
                <StatWidget
                    title="New Customers"
                    value="2,756"
                    color="#46B277"
                    seriesData={[15, 20, 16, 27, 34, 27, 35, 28, 20, 27, 32, 15]}
                    percent="3.51%"
                    trend="up"
                />
                <StatWidget
                    title="Today's Loan"
                    value="5,957"
                    color="#E7366B"
                    seriesData={[12, 25, 18, 40, 28, 35, 21, 38, 32, 15, 45, 29]}
                    percent="6.87%"
                    trend="down"
                />
                <StatWidget
                    title="Today's Inflows"
                    value="$8,473"
                    color="#7168EE"
                    seriesData={[14, 19, 12, 24, 30, 21, 27, 23, 18, 13, 16, 11]}
                    percent="9.19%"
                    trend="up"
                />
                <StatWidget
                    title="Today's Outflows"
                    value="9.62K"
                    color="#E77636"
                    seriesData={[25, 30, 23, 30, 36, 27, 32, 45, 34, 34, 30, 19]}
                    percent="16.8%"
                    trend="down"
                />
            </div>



            <div className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h4 className="text-lg font-semibold m-0 text-emphasis-text">Monthly Transactions</h4>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                <StatWidget
                    title="Monthly Inflow"
                    value="8,848"
                    color="#c26316"
                    seriesData={[10, 15, 9, 18, 22, 17, 25, 20, 15, 10, 12, 8]}
                    percent="16.8%"
                    trend="up"
                />
                <StatWidget
                    title="Monthly Inter-Transfer"
                    value="2,756"
                    color="#46B277"
                    seriesData={[15, 20, 16, 27, 34, 27, 35, 28, 20, 27, 32, 15]}
                    percent="3.51%"
                    trend="up"
                />
                <StatWidget
                    title="Monthly Loans book"
                    value="5,957"
                    color="#E7366B"
                    seriesData={[12, 25, 18, 40, 28, 35, 21, 38, 32, 15, 45, 29]}
                    percent="6.87%"
                    trend="down"
                />
                <StatWidget
                    title="Monthly Loan Repayments"
                    value="$8,473"
                    color="#7168EE"
                    seriesData={[14, 19, 12, 24, 30, 21, 27, 23, 18, 13, 16, 11]}
                    percent="9.19%"
                    trend="up"
                />
                <StatWidget
                    title="Monthly Outflows"
                    value="9.62K"
                    color="#E77636"
                    seriesData={[25, 30, 23, 30, 36, 27, 32, 45, 34, 34, 30, 19]}
                    percent="16.8%"
                    trend="down"
                />
            </div>


            {/* Promo & Detail Stats Row */}
            <div className="flex flex-col gap-6 mb-6 p-6 md:p-10 bg-light/50 rounded-lg">

                <h2 className='block font-bold text-2xl md:text-3xl lg:text-4xl'>Financial Overview</h2>

                <div className='flex flex-col gap-4'>
                    {/* Total Revenues & Product Viewed Flex Container */}
                    <div className="w-full flex flex-col sm:flex-row gap-4">
                        {/* Total Revenues */}
                        <div className="flex-1">
                            <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <span className="me-2 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12.5 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0m5.214-10.136A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764zm0 .012L16 4.25q0-.078-.005-.154M10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1m0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5" />
                                        </svg>
                                    </span>
                                    <p className="mb-0 text-body-text fs-15 font-medium text-truncate">Current Liability</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <h3 className="text-emphasis-text text-3xl mb-0 font-semibold me-3">$599</h3>
                                    <span className="badge bg-success-subtle text-success rounded px-2 py-0.5 text-xs font-semibold">+ 19%</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-3 text-truncate">Compared to last month</p>
                                <a href="#" className="flex items-center justify-between py-3 px-3 bg-dark/50 border border-border rounded-lg hover:bg-light/50 transition-colors text-body-text text-sm font-medium">
                                    View Details
                                    <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
                                </a>
                            </div>
                        </div>

                        {/* Product Viewed */}
                        <div className="flex-1">
                            <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <span className="me-2 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M9.354 12.5a2.75 2.75 0 0 1 0-1.5h-7a3.4 3.4 0 0 0-.104.75c0 .203.036.459.104.75zm2.645 6H6.68C8.063 19.39 9.818 20 12 20h.002c3.641 0 6.091-1.698 7.612-3.556a11 11 0 0 0 1.624-2.707c.33-.794.514-1.528.514-1.987s-.184-1.193-.514-1.987c-.34-.82-.869-1.784-1.624-2.707C18.093 5.198 15.642 3.5 12 3.5c-2.183 0-3.938.61-5.322 1.5h5.323c3.11 0 5.16 1.427 6.451 3.006a9.5 9.5 0 0 1 1.4 2.332c.302.73.4 1.246.4 1.412s-.098.682-.4 1.412a9.5 9.5 0 0 1-1.4 2.332c-1.292 1.579-3.342 3.006-6.45 3.006zM5.385 6a10 10 0 0 0-1.34 1.5h7.954V6zm6.614 2.5H3.391A11 11 0 0 0 2.67 10h7.209a2.75 2.75 0 1 1 0 3.5h-7.21q.045.117.095.237c.164.395.372.822.627 1.263h8.608v1a4.25 4.25 0 1 0 0-8.5zm0 7.5H4.044q.165.223.344.444c.296.362.628.718.997 1.056h6.614z" />
                                        </svg>
                                    </span>
                                    <p className="mb-0 text-body-text fs-15 font-medium text-truncate">Current Income</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <h3 className="text-emphasis-text text-3xl mb-0 font-semibold me-3">10,413</h3>
                                    <span className="badge bg-success-subtle text-success rounded px-2 py-0.5 text-xs font-semibold">+ 19%</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-3 text-truncate">Compared to last month</p>
                                <a href="#" className="flex items-center justify-between py-3 px-3 bg-dark/50 border border-border rounded-lg hover:bg-light/50 transition-colors text-body-text text-sm font-medium">
                                    View Details
                                    <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            {/* Main Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">

                {/* Categories Donut Chart */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full">
                        <div className="p-4 border-b border-border">
                            <h5 className="card-title text-body-text fs-16 font-medium mb-0">Monthly Inflow chart</h5>
                        </div>
                        <div className="p-4 text-center">
                            <Chart options={categoriesChartOptions} series={[72.02, 24.53, 16.47, 18]} type="donut" height={385} />
                            <div className="mt-4">
                                <p className="text-uppercase mb-1 font-medium text-gray-500 text-xs">Total Sales</p>
                                <h3 className="mb-0 text-emphasis-text font-semibold text-2xl">15,685</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sales Analytics Area Chart */}
                <div className="xl:col-span-2 flex flex-col gap-4">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border">
                        <div className="p-4 border-b border-border flex justify-between items-center">
                            <h5 className="card-title text-body-text fs-16 font-medium mb-0">Monthly Outflow Chart</h5>
                            <button className="btn btn-sm bg-light text-primary hover:bg-light/80">Monthly</button>
                        </div>
                        <div className="p-4">
                            <Chart
                                options={salesOvertimeOptions}
                                series={[
                                    { name: "Revenue", data: [9e3, 15e3, 6e3, 9500, 16e3, 8500, 14e3, 19e3, 12e3, 8500, 15e3, 18564] },
                                    { name: "Order", data: [5e3, 3e3, 13e3, 5e3, 9e3, 13500, 19e3, 9500, 3e3, 14e3, 10500, 8500] }
                                ]}
                                type="area"
                                height={290}
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">

                {/*Left - Subscription Details */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full p-6">
                        <h5 className="card-title text-body-text fs-16 font-medium mb-4">Subscription Details</h5>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Plan Name</p>
                                <h4 className="text-emphasis-text font-semibold text-lg">Standard Plan</h4>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Expiry Date</p>
                                <h4 className="text-emphasis-text font-semibold text-lg">Oct 24, 2026</h4>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">License Key</p>
                                <div className="flex items-center gap-2">
                                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm font-mono truncate max-w-[200px]">FCX-8859-2201-9988</code>
                                    <button className="text-gray-400 hover:text-primary transition-colors" title="Copy Key">
                                        <iconify-icon icon="solar:copy-bold-duotone"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Minimum Transfer Amount</p>
                                <h4 className="text-emphasis-text font-semibold text-lg">$100.00</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Right - Transaction Details */}
                <div className="xl:col-span-2">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border p-6 h-full">
                        <h5 className="card-title text-body-text fs-16 font-medium mb-4">Transaction Balances</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <BalanceWidget title="Sms Balance" balance="4,500 Units" details="Remaining SMS credits for alerts." />
                            <BalanceWidget title="Verification Balance" balance="$1,250.00" details="Funds reserved for verification APIs." />
                            <BalanceWidget title="Inward Transfer" balance="$45,200.50" details="Total received from external accounts." />
                            <BalanceWidget title="Outward Transfer" balance="$12,800.00" details="Total sent to external bank accounts." />

                            <BalanceWidget title="General Balance" balance="$28,950.00" details="Main operational account balance." />
                            <BalanceWidget title="Bills Balance" balance="$3,400.00" details="Reserved for recurring bill payments." />
                            <BalanceWidget title="Card Balance" balance="$8,750.00" details="Aggregate balance on issued cards." />
                            <BalanceWidget title="Ussd Balance" balance="$560.00" details="Funds for USSD service charges." />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SalesDashboard;
