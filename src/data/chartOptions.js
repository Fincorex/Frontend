/**
 * ApexCharts Configuration
 * 
 * Centralized store for chart options used throughout the application.
 * Each export corresponds to a specific chart configuration.
 */

// =========================================================================
// Sparkline Charts (Used in Stat Widgets)
// =========================================================================

/**
 * Returns options for a Sparkline Area Chart.
 * @param {string} color - The hex color code for the chart line/fill.
 */
export const sparklineOptions = (color) => ({
    chart: {
        type: 'area',
        height: 45,
        sparkline: { enabled: true },
        animations: { enabled: false }
    },
    stroke: { curve: 'smooth', width: 1 },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    colors: [color],
    tooltip: { enabled: false }
});

// =========================================================================
// Sales Dashboard Charts
// =========================================================================

/**
 * Categories Donut Chart Options
 */
export const categoriesChartOptions = {
    chart: { type: 'donut', height: 385 },
    labels: ["Fashion", "Electronics", "Automobiles", "Property"],
    colors: ["#7168EE", "#46B277", "#963b68", "#01D4FF"],
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            donut: { size: "70%" }
        }
    },
    stroke: { borderRadius: 15, width: 4, colors: ["#fff"] },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { padding: { bottom: -190 } },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: { height: 250 },
            plotOptions: { pie: { donut: { size: "65%" } } },
            grid: { padding: { bottom: -90 } }
        }
    }]
};

/**
 * Sales Analytics Area Chart Options
 */
export const salesOvertimeOptions = {
    chart: { type: 'area', height: 290, toolbar: { show: false } },
    colors: ["#7168EE", "#27ebb0"],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: "#9aa0ac" } }
    },
    yaxis: {
        labels: {
            formatter: (e) => `$${e / 1e3}K`,
            style: { colors: "#9aa0ac" }
        },
        min: 0,
        max: 2e4,
        tickAmount: 4
    },
    legend: { position: "top", horizontalAlign: "right" },
    grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }
};

/**
 * Revenue Bar Chart Options (Optionally used)
 */
export const revenueChartOptions = {
    chart: { type: 'bar', height: 200, toolbar: { show: false } },
    colors: ["#27ebb0", "#E77636"],
    plotOptions: {
        bar: { borderRadius: 1, horizontal: false, columnWidth: "50%" }
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 4, colors: ["transparent"] },
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        axisBorder: { show: true, color: "rgba(167, 180, 201 ,0.2)" },
    },
    yaxis: { labels: { rotate: -90 } },
    grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
    legend: { show: false }
};

// =========================================================================
// Analytics Dashboard Charts
// =========================================================================

/**
 * Monthly Sales Line Chart Options
 */
export const monthlySalesOptions = {
    chart: { height: 355, type: 'line', toolbar: { show: false } },
    stroke: { curve: 'smooth', width: [3, 3, 0], dashArray: [0, 5, 0] },
    fill: {
        type: ["solid", "solid", "gradient"],
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            gradientToColors: ["#F39C12"],
            opacityFrom: 0.8,
            opacityTo: 0.3,
            stops: [0, 100]
        }
    },
    markers: { size: [5, 5, 0], hover: { size: 7 } },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisTicks: { show: true },
        axisBorder: { show: true }
    },
    yaxis: {
        min: 0,
        labels: { formatter: (e) => e + "k" },
        axisBorder: { show: false }
    },
    grid: {
        show: true,
        strokeDashArray: 3,
        padding: { top: 10, left: 20, right: 20, bottom: 10 }
    },
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 5,
        markers: { width: 9, height: 9, radius: 6 },
        itemMargin: { horizontal: 10, vertical: 0 }
    },
    plotOptions: { bar: { columnWidth: "40%", borderRadius: 4 } },
    colors: ["#01D4FF", "#E7366B", "#46B277"],
    tooltip: {
        shared: true,
        intersect: false,
        y: { formatter: (e) => e.toFixed(1) + "k" }
    }
};

/**
 * Sales Growth Rate Area Chat Options
 */
export const saleGrowthRateOptions = {
    chart: { type: 'area', height: 359, stacked: true, toolbar: { show: false } },
    colors: ["#7E57C2", "#42A5F5"],
    dataLabels: { enabled: false },
    stroke: { width: [2, 2], curve: 'straight', lineCap: 'butt' },
    fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.6, opacityTo: 0.8 }
    },
    grid: {
        show: true,
        strokeDashArray: 3,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
        padding: { top: 0, right: -2, bottom: 0, left: 10 }
    },
    xaxis: {
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"],
        axisTicks: { show: false },
        axisBorder: { show: false }
    },
    yaxis: { min: 0, axisBorder: { show: false } },
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 5,
        markers: { width: 9, height: 9, radius: 6 },
        itemMargin: { horizontal: 10, vertical: 0 }
    },
    tooltip: {
        shared: true,
        y: [
            { formatter: (e) => e !== undefined ? e.toFixed(1) + "k" : e },
            { formatter: (e) => e !== undefined ? e.toFixed(1) + "k" : e }
        ]
    }
};

/**
 * Device Views Donut Chart Options
 */
export const deviceViewsOptions = {
    chart: { type: 'donut', height: 270 },
    labels: ["Chrome", "Firefox", "Safari", "Opera"],
    plotOptions: {
        pie: { size: 100, donut: { size: "80%" } }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { width: 0 },
    yaxis: {
        labels: { formatter: (e) => e + "k Session" },
        tickAmount: 4,
        min: 0
    },
    colors: ["#46B277", "#522c8f", "#E77636", "#01D4FF"]
};
