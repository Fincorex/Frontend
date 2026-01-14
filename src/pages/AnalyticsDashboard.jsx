import React from 'react';
import Chart from 'react-apexcharts';
import {
    monthlySalesOptions,
    saleGrowthRateOptions,
    deviceViewsOptions
} from '../data/chartOptions';

/**
 * AnalyticsDashboard Component
 * 
 * Displays analytical data including:
 * - Sales Growth Rate (Line Chart)
 * - Visitor sources (List)
 * - Browser Statistics (Donut Chart)
 * - Campaign Performance (Table)
 */
const AnalyticsDashboard = () => {
    return (
        <div className="container-fluid">
            {/* Header Section */}
            <div className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h4 className="text-lg font-semibold m-0 text-emphasis-text">Dashboard</h4>
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                    <li>Dusty</li>
                    <li>/</li>
                    <li>Apps</li>
                    <li>/</li>
                    <li className="text-primary">Dashboard</li>
                </ol>
            </div>

            {/* Top Row: Browser Stats Table, Sales Growth, Source List */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">

                {/* Browser Stats Table */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full overflow-hidden">
                        <div className="p-4 border-b border-border">
                            <h5 className="text-body-text fs-16 font-medium mb-0">Browser Stats</h5>
                        </div>
                        <div className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-100 text-blue-600">C</span>
                                                    <h6 className="mb-0 text-body-text font-medium">Chrome</h6>
                                                </div>
                                            </td>
                                            <td className="p-3"><span className="flex items-center text-success"><iconify-icon icon="solar:arrow-up-linear" className="mr-1"></iconify-icon> 52%</span></td>
                                            <td className="p-3">
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                                    <div className="bg-success h-1.5 rounded-full" style={{ width: '52%' }}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded bg-orange-100 text-orange-600">F</span>
                                                    <h6 className="mb-0 text-body-text font-medium">Firefox</h6>
                                                </div>
                                            </td>
                                            <td className="p-3"><span className="flex items-center text-danger"><iconify-icon icon="solar:arrow-down-linear" className="mr-1"></iconify-icon> 20%</span></td>
                                            <td className="p-3">
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                                    <div className="bg-danger h-1.5 rounded-full" style={{ width: '20%' }}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded bg-green-100 text-green-600">S</span>
                                                    <h6 className="mb-0 text-body-text font-medium">Safari</h6>
                                                </div>
                                            </td>
                                            <td className="p-3"><span className="flex items-center text-success"><iconify-icon icon="solar:arrow-up-linear" className="mr-1"></iconify-icon> 12%</span></td>
                                            <td className="p-3">
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                                    <div className="bg-warning h-1.5 rounded-full" style={{ width: '12%' }}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded bg-cyan-100 text-cyan-600">O</span>
                                                    <h6 className="mb-0 text-body-text font-medium">Opera</h6>
                                                </div>
                                            </td>
                                            <td className="p-3"><span className="flex items-center text-success"><iconify-icon icon="solar:arrow-up-linear" className="mr-1"></iconify-icon> 8%</span></td>
                                            <td className="p-3">
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '8%' }}></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sales Growth Rate Chart */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full">
                        <div className="p-4 border-b border-border flex justify-between items-center">
                            <h5 className="text-body-text fs-16 font-medium mb-0">Sales Growth Rate</h5>
                            <button className="btn btn-sm bg-light text-primary hover:bg-light/80">Today</button>
                        </div>
                        <div className="p-4">
                            <Chart options={saleGrowthRateOptions} series={[
                                { name: "Last Year", data: [24, 22, 20, 26, 28, 35, 28, 23, 28, 34, 30, 34] },
                                { name: "This Year", data: [30, 25, 30, 36, 32, 36, 36, 34, 39, 42, 33, 37] }
                            ]} type="area" height={359} />
                        </div>
                    </div>
                </div>

                {/* Visits By Source List */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full">
                        <div className="p-4 border-b border-border">
                            <h5 className="text-body-text fs-16 font-medium mb-0">Visits by Source</h5>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                            <iconify-icon icon="solar:chart-square-linear" className="text-xl text-gray-500"></iconify-icon>
                                        </div>
                                        <span className="font-medium text-body-text">Direct Marketing</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">2,067</div>
                                        <span className="text-xs text-success flex items-center justify-end"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 2.6%</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                            <iconify-icon icon="solar:global-linear" className="text-xl text-gray-500"></iconify-icon>
                                        </div>
                                        <span className="font-medium text-body-text">Social Marketing</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">7,895</div>
                                        <span className="text-xs text-success flex items-center justify-end"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 4.8%</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                            <iconify-icon icon="solar:letter-linear" className="text-xl text-gray-500"></iconify-icon>
                                        </div>
                                        <span className="font-medium text-body-text">Email Marketing</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">45,150</div>
                                        <span className="text-xs text-success flex items-center justify-end"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 6.5%</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                            <iconify-icon icon="solar:users-group-rounded-linear" className="text-xl text-gray-500"></iconify-icon>
                                        </div>
                                        <span className="font-medium text-body-text">Referrals</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">1,478</div>
                                        <span className="text-xs text-danger flex items-center justify-end"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon> 0.8%</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                            <iconify-icon icon="solar:monitor-smartphone-linear" className="text-xl text-gray-500"></iconify-icon>
                                        </div>
                                        <span className="font-medium text-body-text">Digital Marketing</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium">25,058</div>
                                        <span className="text-xs text-success flex items-center justify-end"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 2.0%</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Visitors Donut and Campaign Table */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-6">
                {/* Visitors by Browser Donut */}
                <div className="xl:col-span-1">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full">
                        <div className="p-4 border-b border-border">
                            <h5 className="text-body-text fs-16 font-medium mb-0">Visitors By Browser</h5>
                        </div>
                        <div className="p-4 text-center">
                            <Chart options={deviceViewsOptions} series={[65.48, 112.02, 80.48, 58.65]} type="donut" height={270} />
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success"></span> Chrome</span>
                                    <span>27.65%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Firefox</span>
                                    <span>19.20%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-warning"></span> Safari</span>
                                    <span>9.69%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-info"></span> Opera</span>
                                    <span>7.15%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaign Analytics Table */}
                <div className="xl:col-span-3">
                    <div className="bg-card-bg rounded-lg shadow-sm border border-border h-full overflow-hidden">
                        <div className="p-4 border-b border-border">
                            <h5 className="text-body-text fs-16 font-medium mb-0">Campaign Analytics</h5>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-light dark:bg-dark-secondary text-gray-500">
                                    <tr>
                                        <th className="p-3 font-medium">Website</th>
                                        <th className="p-3 font-medium">CTR</th>
                                        <th className="p-3 font-medium">Impressions</th>
                                        <th className="p-3 font-medium">Amount Spent</th>
                                        <th className="p-3 font-medium">Clicks</th>
                                        <th className="p-3 font-medium">Cost Per Click</th>
                                        <th className="p-3 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { name: 'Google', ctr: '9.21%', imp: '124.89K', spent: '$2.876K', clicks: '1.15K', cpc: '$0.267', badge: 'bg-primary-subtle text-primary' },
                                        { name: 'Facebook', ctr: '5.65%', imp: '185.32K', spent: '$4.983K', clicks: '2.55K', cpc: '$1.754', badge: 'bg-danger-subtle text-danger' },
                                        { name: 'Instagram', ctr: '12.23%', imp: '125.56K', spent: '$7.436K', clicks: '3.8K', cpc: '$1.956', badge: 'bg-warning-subtle text-warning' },
                                        { name: 'Twitter', ctr: '18.16%', imp: '165.41K', spent: '$2.543K', clicks: '6.21K', cpc: '$2.154', badge: 'bg-success-subtle text-success' },
                                        { name: 'Affiliate', ctr: '8.15%', imp: '163.56K', spent: '$8.650K', clicks: '8.15K', cpc: '$3.652', badge: 'bg-secondary-subtle text-secondary' },
                                        { name: 'YouTube', ctr: '6.85%', imp: '123.58K', spent: '$7.650K', clicks: '6.63K', cpc: '$4.104', badge: 'bg-dark-subtle text-dark' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5">
                                            <td className="p-3 font-semibold text-emphasis-text">{row.name}</td>
                                            <td className="p-3"><span className={`px-2 py-0.5 rounded text-xs font-medium ${row.badge}`}>{row.ctr}</span></td>
                                            <td className="p-3 text-body-text">{row.imp}</td>
                                            <td className="p-3 text-body-text">{row.spent}</td>
                                            <td className="p-3 text-body-text">{row.clicks}</td>
                                            <td className="p-3 text-body-text">{row.cpc}</td>
                                            <td className="p-3">
                                                <div className="flex gap-2">
                                                    <button className="w-8 h-8 rounded flex items-center justify-center bg-primary-subtle text-primary hover:bg-primary hover:text-white transition-colors">
                                                        <iconify-icon icon="solar:pen-linear"></iconify-icon>
                                                    </button>
                                                    <button className="w-8 h-8 rounded flex items-center justify-center bg-danger-subtle text-danger hover:bg-danger hover:text-white transition-colors">
                                                        <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AnalyticsDashboard;
